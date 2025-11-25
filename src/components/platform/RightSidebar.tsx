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
    <aside className="w-80 min-h-screen p-6 space-y-6 sticky top-0">
      {/* Próximos Eventos */}
      <div className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="w-5 h-5 text-dark-fg" />
          <h2 className="text-lg font-bold text-dark-fg">Próximos Eventos</h2>
        </div>
        
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-4 rounded-xl bg-dark-bg/30 border border-secondary/10 hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="flex gap-4">
                <div className="flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                  <span className="text-2xl font-bold text-dark-fg">{event.date}</span>
                  <span className="text-xs text-dark-fg/60 uppercase">{event.month}</span>
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
                className="w-full mt-3 bg-secondary/10 text-dark-fg hover:bg-secondary/20 border border-secondary/20"
              >
                Confirmar Presença
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Seu Progresso */}
      <div className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <Trophy className="w-5 h-5 text-dark-fg" />
          <h2 className="text-lg font-bold text-dark-fg">Seu Progresso</h2>
        </div>

        {/* Nível */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-2xl font-bold text-dark-fg">Nível 7</p>
            <p className="text-sm text-dark-fg/60">Engajador Ativo</p>
          </div>
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="34"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
                className="text-secondary/20"
              />
              <circle
                cx="40"
                cy="40"
                r="34"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 34}`}
                strokeDashoffset={`${2 * Math.PI * 34 * (1 - 0.68)}`}
                className="text-secondary transition-all duration-500"
                style={{ filter: "drop-shadow(0 0 8px hsl(var(--secondary) / 0.4))" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-dark-fg">68%</span>
            </div>
          </div>
        </div>

        {/* Ritual Semanal */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-dark-fg" />
            <p className="text-sm font-semibold text-dark-fg">Ritual Semanal</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-dark-fg/60">
              <span>4 de 5 rituais completos</span>
              <span>80%</span>
            </div>
            <Progress value={80} className="h-2 bg-secondary/20" />
          </div>
        </div>

        {/* Conquistas Recentes */}
        <div className="mt-6 pt-6 border-t border-secondary/10">
          <p className="text-sm font-semibold text-dark-fg mb-3">Conquistas Recentes</p>
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-xl">
              🎯
            </div>
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-xl">
              🚀
            </div>
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-xl">
              💡
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
