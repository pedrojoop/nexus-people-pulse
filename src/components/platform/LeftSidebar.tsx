import { Home, Calendar, MessageCircle, Users, BookOpen, BarChart3, Settings } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const menuItems = [
  { icon: Home, label: "Feed", path: "/platform" },
  { icon: Calendar, label: "Eventos", path: "/platform/eventos" },
  { icon: MessageCircle, label: "Chat", path: "/platform/chat" },
  { icon: Users, label: "Time", path: "/platform/time" },
  { icon: BookOpen, label: "Academia", path: "/platform/academia" },
  { icon: BarChart3, label: "Insights", path: "/platform/insights" },
  { icon: Settings, label: "Configurações", path: "/platform/config" },
];

export const LeftSidebar = () => {
  return (
    <aside className="w-64 min-h-screen border-r border-border/10 p-6 sticky top-0 h-screen overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark-fg">Nexus</h1>
        <p className="text-sm text-dark-fg/60 mt-1">People & Culture</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/platform"}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-dark-fg/70 hover:text-dark-fg hover:bg-secondary/10 transition-all duration-300"
            activeClassName="text-dark-fg bg-gradient-beige/20 shadow-glow-primary"
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-8">
        <div className="p-4 rounded-lg bg-gradient-card backdrop-blur-xl border border-secondary/20">
          <p className="text-xs text-dark-fg/80 mb-2">✨ Dica da Semana</p>
          <p className="text-sm text-dark-fg/60">
            Use os rituais para manter o time conectado
          </p>
        </div>
      </div>
    </aside>
  );
};
