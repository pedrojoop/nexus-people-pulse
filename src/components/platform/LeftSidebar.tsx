import { Home, Calendar, MessageCircle, Users, BookOpen, BarChart3, Settings, Sparkles, Heart, GraduationCap, Trophy, FolderOpen } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const menuItems = [
  { icon: Home, label: "Feed", path: "/platform" },
  { icon: Sparkles, label: "IA de Cultura", path: "/cultura-ia" },
  { icon: Heart, label: "Culture-as-a-Service", path: "/culture-service" },
  { icon: GraduationCap, label: "Treinamentos (LMS)", path: "/lms", category: "RH" },
  { icon: Trophy, label: "Gamificação", path: "/gamification" },
  { icon: Calendar, label: "Eventos", path: "/platform/eventos" },
  { icon: MessageCircle, label: "Chat", path: "/platform/chat" },
  { icon: Users, label: "Time", path: "/platform/time" },
  { icon: FolderOpen, label: "Documentos", path: "/platform/documentos" },
  { icon: BookOpen, label: "Academia", path: "/platform/academia" },
  { icon: Settings, label: "Configurações", path: "/platform/config" },
];

export const LeftSidebar = () => {
  return (
    <aside className="w-64 min-h-[calc(100vh-4rem)] border-r border-secondary/10 p-6 sticky top-16 overflow-y-auto bg-gradient-card/30 backdrop-blur-sm">
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/platform"}
            className="group relative flex items-center gap-3 px-4 py-3 rounded-xl text-dark-fg/70 hover:text-dark-fg hover:bg-secondary/10 transition-all duration-300"
            activeClassName="text-dark-fg bg-secondary/20 shadow-glow-primary"
          >
            <div className="absolute left-0 w-1 h-8 bg-secondary rounded-r-full opacity-0 transition-opacity duration-300 group-[.active]:opacity-100" />
            <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 pt-8 border-t border-secondary/10">
        <div className="p-4 rounded-xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">✨</span>
            <p className="text-xs font-semibold text-dark-fg/80">Dica da Semana</p>
          </div>
          <p className="text-sm text-dark-fg/60 leading-relaxed">
            Use os rituais para manter o time conectado e engajado
          </p>
        </div>
      </div>
    </aside>
  );
};
