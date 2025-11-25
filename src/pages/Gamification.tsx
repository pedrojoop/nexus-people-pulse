import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Edit2, Trash2, Trophy, Gift, Target, Calendar } from "lucide-react";

export default function Gamification() {
  // Mock data for Níveis
  const niveis = [
    { id: 1, nome: "Nível 1", xpNecessario: "0 XP" },
    { id: 2, nome: "Nível 2", xpNecessario: "100 XP" },
    { id: 3, nome: "Nível 3", xpNecessario: "250 XP" },
    { id: 4, nome: "Nível 4", xpNecessario: "500 XP" },
    { id: 5, nome: "Nível 5", xpNecessario: "1000 XP" },
  ];

  // Mock data for Recompensas
  const recompensas = [
    { id: 1, nome: "Vale-Presente R$50", nivelMinimo: 3, icon: Gift },
    { id: 2, nome: "Troféu Ouro", nivelMinimo: 5, icon: Trophy },
    { id: 3, nome: "Dia de Folga Extra", nivelMinimo: 4, icon: Calendar },
    { id: 4, nome: "Vale-Presente R$100", nivelMinimo: 5, icon: Gift },
  ];

  // Mock data for Metas e Desafios
  const metas = [
    { id: 1, titulo: "Completar 5 projetos", escopo: "Individual", recompensaXP: "50 XP", prazo: "30 dias" },
    { id: 2, titulo: "Participar de 3 eventos culturais", escopo: "Individual", recompensaXP: "30 XP", prazo: "60 dias" },
    { id: 3, titulo: "Alcançar 90% de engajamento no time", escopo: "Time", recompensaXP: "100 XP", prazo: "90 dias" },
    { id: 4, titulo: "Concluir 2 treinamentos", escopo: "Individual", recompensaXP: "40 XP", prazo: "45 dias" },
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <PlatformHeader />
      <div className="flex">
        <LeftSidebar />
        <main className="flex-1 p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-dark-fg mb-2">Gamificação: Administração</h1>
            <p className="text-dark-fg/60">Gerencie níveis, recompensas e desafios da plataforma</p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="niveis" className="w-full">
            <div className="flex items-center justify-between mb-6">
              <TabsList className="bg-gradient-card backdrop-blur-xl border border-secondary/20">
                <TabsTrigger value="niveis" className="data-[state=active]:bg-secondary/20 data-[state=active]:text-dark-fg text-dark-fg/60">
                  Níveis
                </TabsTrigger>
                <TabsTrigger value="recompensas" className="data-[state=active]:bg-secondary/20 data-[state=active]:text-dark-fg text-dark-fg/60">
                  Recompensas
                </TabsTrigger>
                <TabsTrigger value="metas" className="data-[state=active]:bg-secondary/20 data-[state=active]:text-dark-fg text-dark-fg/60">
                  Metas e Desafios
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab 1: Níveis */}
            <TabsContent value="niveis" className="space-y-4">
              <div className="flex justify-end mb-4">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  + Novo Nível
                </Button>
              </div>
              <div className="space-y-3">
                {niveis.map((nivel) => (
                  <div
                    key={nivel.id}
                    className="flex items-center justify-between p-6 rounded-xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-dark-fg">{nivel.nome}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="text-sm text-dark-fg/60">XP Necessário</p>
                        <p className="text-lg font-semibold text-dark-fg">{nivel.xpNecessario}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg hover:bg-secondary/20 transition-colors">
                          <Edit2 className="w-5 h-5 text-secondary" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-destructive/20 transition-colors">
                          <Trash2 className="w-5 h-5 text-destructive" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Tab 2: Recompensas */}
            <TabsContent value="recompensas" className="space-y-4">
              <div className="flex justify-end mb-4">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  + Nova Recompensa
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recompensas.map((recompensa) => {
                  const IconComponent = recompensa.icon;
                  return (
                    <div
                      key={recompensa.id}
                      className="p-6 rounded-xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary transition-all duration-300"
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                          <IconComponent className="w-8 h-8 text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-dark-fg mb-2">{recompensa.nome}</h3>
                          <p className="text-sm text-dark-fg/60">Nível Mínimo: {recompensa.nivelMinimo}</p>
                        </div>
                        <div className="flex items-center gap-2 pt-2">
                          <button className="p-2 rounded-lg hover:bg-secondary/20 transition-colors">
                            <Edit2 className="w-4 h-4 text-secondary" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-destructive/20 transition-colors">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* Tab 3: Metas e Desafios */}
            <TabsContent value="metas" className="space-y-4">
              <div className="flex justify-end mb-4">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  + Nova Meta/Desafio
                </Button>
              </div>
              <div className="space-y-3">
                {metas.map((meta) => (
                  <div
                    key={meta.id}
                    className="flex items-center justify-between p-6 rounded-xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Target className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-dark-fg mb-2">{meta.titulo}</h3>
                        <div className="flex items-center gap-4 text-sm text-dark-fg/60">
                          <div className="flex items-center gap-2">
                            <span className="text-dark-fg/50">Escopo:</span>
                            <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                              {meta.escopo}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-dark-fg/50">Recompensa:</span>
                            <span className="text-dark-fg font-medium">{meta.recompensaXP}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-dark-fg/50">Prazo:</span>
                            <span className="text-dark-fg font-medium">{meta.prazo}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-secondary/20 transition-colors">
                        <Edit2 className="w-5 h-5 text-secondary" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-destructive/20 transition-colors">
                        <Trash2 className="w-5 h-5 text-destructive" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
