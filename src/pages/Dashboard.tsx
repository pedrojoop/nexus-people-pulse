import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { Trophy, Target, Zap, Lock, Award, Star, Heart, Rocket, Lightbulb, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const goals = [
  { id: 1, title: "Completar 5 cursos", progress: 60, current: 3, total: 5 },
  { id: 2, title: "Contribuir em 10 projetos", progress: 80, current: 8, total: 10 },
  { id: 3, title: "Mentorar 3 pessoas", progress: 33, current: 1, total: 3 },
];

const challenges = [
  { id: 1, title: "Semana do Feedback", description: "Dê feedback a 5 colegas", progress: 40, deadline: "3 dias" },
  { id: 2, title: "Sprint de Inovação", description: "Propor 2 ideias inovadoras", progress: 50, deadline: "5 dias" },
];

const achievements = [
  { id: 1, icon: "🏆", title: "Badge Pioneiro", description: "Primeiro usuário da plataforma", unlocked: true },
  { id: 2, icon: "🎯", title: "Mestre da Cultura", description: "Completou 10 cursos de cultura", unlocked: true },
  { id: 3, icon: "💡", title: "Inovador", description: "5 ideias implementadas", unlocked: true },
  { id: 4, icon: "🚀", title: "Líder Inspirador", description: "Mentorou 10 pessoas", unlocked: false },
  { id: 5, icon: "⭐", title: "Engajador Master", description: "100 posts publicados", unlocked: false },
  { id: 6, icon: "❤️", title: "Comunidade", description: "1000 interações", unlocked: false },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <PlatformHeader />
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1600px]">
          <LeftSidebar />
          
          <main className="flex-1 min-h-screen p-8 pt-6">
            <div className="space-y-6 max-w-6xl mx-auto">
              {/* User Profile Header Card */}
              <div className="p-8 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary transition-all duration-300">
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-beige/20 flex items-center justify-center shadow-glow-secondary">
                      <span className="text-4xl font-bold text-dark-fg">PL</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-secondary border-4 border-dark-bg flex items-center justify-center shadow-glow-secondary">
                      <Trophy className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  
                  {/* User Info & Level */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-dark-fg mb-1">Pedro Lima</h1>
                        <p className="text-dark-fg/60">Super Admin</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-dark-fg mb-1">Nível 7</p>
                        <p className="text-sm text-dark-fg/60">Engajador Ativo</p>
                      </div>
                    </div>
                    
                    {/* XP Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-dark-fg/70">Experiência</span>
                        <span className="text-secondary font-semibold">6,800 / 10,000 XP</span>
                      </div>
                      <div className="relative h-3 w-full overflow-hidden rounded-full bg-secondary/10">
                        <div 
                          className="h-full bg-gradient-beige transition-all duration-500 rounded-full"
                          style={{ 
                            width: '68%',
                            boxShadow: '0 0 16px hsl(var(--secondary) / 0.6)'
                          }}
                        />
                      </div>
                      <p className="text-xs text-dark-fg/60">3,200 XP até o próximo nível</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex gap-2 border-b border-secondary/10">
                <button className="px-6 py-3 text-dark-fg font-semibold border-b-2 border-secondary transition-colors">
                  Meu Dashboard
                </button>
                <button className="px-6 py-3 text-dark-fg/60 hover:text-dark-fg border-b-2 border-transparent hover:border-secondary/30 transition-colors">
                  Informações Pessoais
                </button>
              </div>

              {/* Dashboard Content - Two Columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Minhas Metas Card */}
                  <div className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary transition-all duration-300">
                    <div className="flex items-center gap-2 mb-6">
                      <Target className="w-5 h-5 text-secondary" />
                      <h2 className="text-xl font-bold text-dark-fg">Minhas Metas</h2>
                    </div>
                    
                    <div className="space-y-5">
                      {goals.map((goal) => (
                        <div key={goal.id} className="p-4 rounded-xl bg-dark-bg/40 border border-secondary/10 hover:border-secondary/20 transition-all duration-300">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-dark-fg font-semibold">{goal.title}</h3>
                            <span className="text-xs text-dark-fg/60 bg-secondary/10 px-2 py-1 rounded-lg">
                              {goal.current}/{goal.total}
                            </span>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-dark-fg/60">
                              <span>Progresso</span>
                              <span className="font-semibold text-secondary">{goal.progress}%</span>
                            </div>
                            <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary/10">
                              <div 
                                className="h-full bg-gradient-beige transition-all duration-500 rounded-full"
                                style={{ 
                                  width: `${goal.progress}%`,
                                  boxShadow: '0 0 12px hsl(var(--secondary) / 0.5)'
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Desafios Ativos Card */}
                  <div className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary transition-all duration-300">
                    <div className="flex items-center gap-2 mb-6">
                      <Zap className="w-5 h-5 text-secondary" />
                      <h2 className="text-xl font-bold text-dark-fg">Desafios Ativos</h2>
                    </div>
                    
                    <div className="space-y-4">
                      {challenges.map((challenge) => (
                        <div key={challenge.id} className="p-4 rounded-xl bg-dark-bg/40 border border-secondary/10 hover:border-secondary/20 transition-all duration-300 group">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-dark-fg font-semibold">{challenge.title}</h3>
                            <span className="text-xs text-dark-fg/60 bg-secondary/20 px-2 py-1 rounded-lg font-medium">
                              {challenge.deadline}
                            </span>
                          </div>
                          <p className="text-sm text-dark-fg/70 mb-3">{challenge.description}</p>
                          <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary/10">
                            <div 
                              className="h-full bg-gradient-beige transition-all duration-500 rounded-full"
                              style={{ 
                                width: `${challenge.progress}%`,
                                boxShadow: '0 0 12px hsl(var(--secondary) / 0.5)'
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Conquistas & Recompensas */}
                <div className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary transition-all duration-300 h-fit lg:sticky lg:top-24">
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="w-5 h-5 text-secondary" />
                    <h2 className="text-xl font-bold text-dark-fg">Conquistas & Recompensas</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {achievements.map((achievement) => (
                      <div 
                        key={achievement.id} 
                        className={`p-4 rounded-xl border transition-all duration-300 ${
                          achievement.unlocked 
                            ? 'bg-dark-bg/40 border-secondary/20 hover:border-secondary/40 hover:bg-dark-bg/50' 
                            : 'bg-dark-bg/20 border-secondary/5 opacity-60'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
                            achievement.unlocked 
                              ? 'bg-gradient-beige/20 shadow-glow-secondary' 
                              : 'bg-dark-bg/40 grayscale'
                          }`}>
                            {achievement.unlocked ? achievement.icon : '🔒'}
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h3 className={`font-semibold ${
                                achievement.unlocked ? 'text-dark-fg' : 'text-dark-fg/40'
                              }`}>
                                {achievement.title}
                              </h3>
                              {achievement.unlocked && (
                                <Badge className="bg-secondary text-primary text-xs px-2 py-0.5 shadow-glow-secondary">
                                  Desbloqueado
                                </Badge>
                              )}
                              {!achievement.unlocked && (
                                <Lock className="w-4 h-4 text-dark-fg/30 flex-shrink-0" />
                              )}
                            </div>
                            <p className={`text-sm ${
                              achievement.unlocked ? 'text-dark-fg/70' : 'text-dark-fg/40'
                            }`}>
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats Summary */}
                  <div className="mt-6 pt-6 border-t border-secondary/10 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-dark-fg">3</p>
                      <p className="text-xs text-dark-fg/60">Desbloqueadas</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-dark-fg">3</p>
                      <p className="text-xs text-dark-fg/60">Bloqueadas</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-secondary">50%</p>
                      <p className="text-xs text-dark-fg/60">Completo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
