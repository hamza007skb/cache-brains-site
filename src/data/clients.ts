import essenceOrganicOilLogo from "@/assets/clients/essence-organic-oil.jpeg.asset.json";
import matchstickLogo from "@/assets/clients/matchstick.jpeg.asset.json";
import meatNCheeseLogo from "@/assets/clients/meat-n-cheese.jpeg.asset.json";
import sgiLogo from "@/assets/clients/sgi.jpeg.asset.json";
import sportsReserveLogo from "@/assets/clients/sports-reserve.jpeg.asset.json";
import sunnyCraftLogo from "@/assets/clients/sunny-craft.jpg.asset.json";
import znsLogo from "@/assets/clients/zns.jpeg.asset.json";

export interface Client {
  slug: string;
  name: string;
  logo: string;
  work?: string;
}

export const clients: Client[] = [
  {
    slug: "sunny-craft",
    name: "Sunny Craft",
    logo: "/logo of clients/sunnycraft.jpg",
    work: "Enterprise management systems",
  },
  {
    slug: "security-general-insurance",
    name: "Security General Insurance",
    logo: "/logo of clients/sgi.jpeg",
    work: "Automation systems",
  },
  {
    slug: "meat-n-cheese",
    name: "Meat N’ Cheese",
    logo: "/logo of clients/meat n cheese.jpeg",
    work: "Management system",
  },
  {
    slug: "essence-organic-hair-oil",
    name: "Essence Organic Oil",
    logo: "/logo of clients/essence organic oil.jpeg",
  },
  {
    slug: "zns",
    name: "ZNS",
    logo: "/logo of clients/zns.jpeg",
    work: "Website development",
  },
  {
    slug: "matchstick",
    name: "Matchstick",
    logo: "/logo of clients/matchstick.jpeg",
    work: "RLS policies and database design",
  },
  {
    slug: "sports-reserve",
    name: "Sports Reserve",
    logo: "/logo of clients/sportreserve.jpeg",
    work: "Website development",
  },
];
