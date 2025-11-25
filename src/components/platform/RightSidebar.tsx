import { Calendar, MapPin, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const events = [
  {
    id: 1,
    date: "15",
    month: "MAR",
    title: "All-Hands: Q1 Review",
    time: "15:00",
    location: "Zoom",
  },
  {
    id: 2,
    date: "18",
    month: "MAR",
    title: "Workshop: Feedback Culture",
    time: "10:00",
    location: "Sala 3",
  },
  {
    id: 3,
    date: "22",
    month: "MAR",
    title: "Happy Hour Virtual",
    time: "18:00",
    location: "Gather.town",
  },
];

export const RightSidebar = () => {
  return (
    <aside className="w-80 min-h-[calc(100vh-4rem)] p-6 space-y-6 sticky top-16 overflow-y-auto">
      {/* Próximos Eventos */}
      <div className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="w-5 h-5 text-secondary" />
          <h2 className="text-lg font-bold text-dark-fg">Próximos Eventos</h2>
        </div>
        
        <div className="space-y-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-4 rounded-xl bg-dark-bg/40 border border-secondary/10 hover:border-secondary/30 hover:bg-dark-bg/50 transition-all duration-300 group"
            >
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-gradient-beige/20 group-hover:bg-gradient-beige/30 transition-colors shadow-glow-secondary">
                  <span className="text-xl font-bold text-dark-fg">{event.date}</span>
                  <span className="text-[10px] text-dark-fg/60 uppercase font-semibold">{event.month}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-dark-fg font-semibold text-sm mb-1 line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-dark-fg/60">
                    <span>{event.time}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="w-full mt-3 text-dark-fg/70 hover:text-secondary hover:bg-secondary/10 border border-secondary/20 transition-all duration-300"
              >
                Confirmar Presença
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Seu Progresso */}
      <div className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <Trophy className="w-5 h-5 text-secondary" />
          <h2 className="text-lg font-bold text-dark-fg">Seu Progresso</h2>
        </div>

        {/* Nível com Glowing Progress Ring */}
        <div className="flex items-center justify-between mb-8 p-4 rounded-xl bg-dark-bg/40">
          <div>
            <p className="text-3xl font-bold text-dark-fg mb-1">Nível 7</p>
            <p className="text-sm text-dark-fg/60">Engajador Ativo</p>
          </div>
          <div className="relative w-24 h-24">
            {/* Background circle */}
            <svg className="w-24 h-24 transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-secondary/10"
              />
              {/* Progress circle with glow */}
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="url(#progressGradient)"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.68)}`}
                strokeLinecap="round"
                className="transition-all duration-1000"
                style={{ 
                  filter: "drop-shadow(0 0 12px hsl(var(--secondary) / 0.6)) drop-shadow(0 0 24px hsl(var(--secondary) / 0.3))",
                }}
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--secondary))" />
                  <stop offset="100%" stopColor="hsl(40 35% 82%)" />
                </linearGradient>
              </defs>
            </svg>
            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-dark-fg">68%</span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Ritual Semanal */}
        <div className="space-y-3 p-4 rounded-xl bg-dark-bg/40">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-secondary" />
            <p className="text-sm font-semibold text-dark-fg">Ritual Semanal</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-dark-fg/60">
              <span>4 de 5 rituais completos</span>
              <span className="font-semibold text-secondary">80%</span>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary/10">
              <div 
                className="h-full bg-gradient-beige transition-all duration-500 rounded-full"
                style={{ 
                  width: '80%',
                  boxShadow: '0 0 12px hsl(var(--secondary) / 0.5)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Conquistas Recentes */}
        <div className="mt-6 pt-6 border-t border-secondary/10">
          <p className="text-sm font-semibold text-dark-fg mb-4">Conquistas Recentes</p>
          <div className="flex gap-3">
            <div className="w-14 h-14 rounded-xl bg-gradient-beige/20 flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 shadow-glow-secondary cursor-pointer">
              🎯
            </div>
            <div className="w-14 h-14 rounded-xl bg-gradient-beige/20 flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 shadow-glow-secondary cursor-pointer">
              🚀
            </div>
            <div className="w-14 h-14 rounded-xl bg-gradient-beige/20 flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-300 shadow-glow-secondary cursor-pointer">
              💡
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
