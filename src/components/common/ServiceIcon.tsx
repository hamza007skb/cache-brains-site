import {
  Cpu,
  BarChart3,
  Eye,
  Type,
  Layers,
  Workflow,
  Search,
  Network,
  Mic,
  Code2,
  Server,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  chart: BarChart3,
  eye: Eye,
  type: Type,
  layers: Layers,
  workflow: Workflow,
  search: Search,
  network: Network,
  mic: Mic,
  code: Code2,
  server: Server,
};

export default function ServiceIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const IconComponent = iconMap[name] ?? Cpu;
  return <IconComponent className={className} strokeWidth={1.5} />;
}
