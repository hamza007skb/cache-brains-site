import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import Logo from "@/components/common/Logo";
import Button from "@/components/common/Button";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/showcase", label: "Showcase" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-line bg-paper/90 shadow-card backdrop-blur-md"
          : "border-transparent bg-paper/70 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-4">
        <Link to="/" aria-label="CacheBrains home" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.to) ? "text-ink" : "text-stone hover:text-ink"
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-3 -bottom-[15px] h-[2px] bg-copper transition-transform duration-300 ${
                  isActive(link.to) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary">
            Get in touch
          </Button>
        </div>

        <button
          className="-mr-2 p-2 text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-paper px-5 pb-5 pt-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`border-l-2 px-3 py-3 text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? "border-copper bg-paper-dark/60 text-ink"
                  : "border-transparent text-stone"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button to="/contact" variant="primary" className="mt-3 w-full">
            Get in touch
          </Button>
        </nav>
      )}
    </header>
  );
}
