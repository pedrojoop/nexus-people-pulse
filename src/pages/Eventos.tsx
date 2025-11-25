import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { RightSidebar } from "@/components/platform/RightSidebar";
import { Search, Clock, MapPin, Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const eventos = [
  {
    id: 1,
    title: "Retrospectiva Sprint 24",
    date: new Date(2024, 10, 21, 14, 0),
    location: "Sala Inovação",
    participants: 8,
  },
  {
    id: 2,
    title: "All Hands - Q4 Review",
    date: new Date(2024, 10, 25, 10, 0),
    location: "Auditório Principal",
    participants: 45,
  },
  {
    id: 3,
    title: "Workshop: Design Thinking",
    date: new Date(2024, 10, 28, 9, 30),
    location: "Sala Criativa",
    participants: 12,
  },
  {
    id: 4,
    title: "Celebração de Conquistas do Trimestre",
    date: new Date(2024, 11, 2, 18, 0),
    location: "Espaço Convivência",
    participants: 60,
  },
  {
    id: 5,
    title: "Treinamento: Novas Ferramentas",
    date: new Date(2024, 11, 5, 14, 0),
    location: "Online - Teams",
    participants: 20,
  },
  {
    id: 6,
    title: "Coffee & Code",
    date: new Date(2024, 11, 8, 15, 0),
    location: "Sala Café",
    participants: 15,
  },
];

const Eventos = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <PlatformHeader />
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1600px]">
          <LeftSidebar />
          
          <main className="flex-1 min-h-[calc(100vh-4rem)] p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold text-dark-fg">Eventos</h1>
              <Button className="bg-secondary hover:bg-secondary/80 text-dark-fg gap-2">
                <Plus className="w-5 h-5" />
                Criar Evento
              </Button>
            </div>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-fg/40" />
                <Input
                  placeholder="Buscar eventos..."
                  className="pl-12 h-12 bg-dark-bg/50 border-secondary/30 text-dark-fg placeholder:text-dark-fg/40 focus-visible:ring-secondary/30"
                />
              </div>
            </div>

            {/* Events List */}
            <div className="space-y-4">
              {eventos.map((evento) => (
                <div
                  key={evento.id}
                  className="bg-gradient-card backdrop-blur-xl border border-secondary/20 rounded-2xl p-6 shadow-glow-subtle hover:shadow-glow-primary transition-all duration-300 hover:border-secondary/40"
                >
                  <div className="flex items-center gap-6">
                    {/* Date Column */}
                    <div className="flex flex-col items-center justify-center w-20 h-20 bg-secondary/20 rounded-xl border border-secondary/30">
                      <span className="text-3xl font-bold text-dark-fg leading-none">
                        {format(evento.date, "dd")}
                      </span>
                      <span className="text-xs font-semibold text-dark-fg/60 uppercase mt-1">
                        {format(evento.date, "MMM", { locale: ptBR })}
                      </span>
                    </div>

                    {/* Event Details Column */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-dark-fg mb-3">
                        {evento.title}
                      </h3>
                      <div className="flex items-center gap-6 text-dark-fg/60">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-secondary" />
                          <span className="text-sm">
                            {format(evento.date, "HH:mm")}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-secondary" />
                          <span className="text-sm">{evento.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-secondary" />
                          <span className="text-sm">
                            {evento.participants} participantes
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      variant="ghost"
                      className="hover:bg-destructive/10 hover:text-destructive text-dark-fg/70 border border-transparent hover:border-destructive/30"
                    >
                      Sair
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </main>

          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Eventos;
