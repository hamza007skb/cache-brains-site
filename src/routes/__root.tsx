import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

function NotFoundComponent() {
  return (
    <Container className="flex flex-col items-start py-28 md:py-36">
      <span className="font-mono text-sm text-copper">404</span>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md leading-relaxed text-stone">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Button to="/" variant="primary" className="mt-8">
        Back to home
      </Button>
    </Container>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <Container className="flex flex-col items-start py-28 md:py-36">
      <span className="font-mono text-sm text-copper">Error</span>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
        This page didn't load
      </h1>
      <p className="mt-3 max-w-md leading-relaxed text-stone">
        Something went wrong on our end. You can try again or head back home.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          variant="primary"
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Try again
        </Button>
        <Button to="/" variant="secondary">
          Go home
        </Button>
      </div>
    </Container>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CacheBrains — AI & Software Engineering Studio" },
      {
        name: "description",
        content:
          "CacheBrains is an AI and software engineering studio building production-grade AI systems, automations, and software — including for legacy infrastructure.",
      },
      { name: "author", content: "CacheBrains" },
      { property: "og:title", content: "CacheBrains — AI & Software Engineering Studio" },
      {
        property: "og:description",
        content:
          "Production-grade AI systems, automations, and software engineering for teams who need more than a proof of concept.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico?v=6", sizes: "48x48" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/tab-logo.png?v=6" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png?v=6" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Cache Brains",
          url: "https://cachebrains.com",
          logo: "https://cachebrains.com/tab-logo.png",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function ScrollToTop() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-paper">
        <Navbar />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
