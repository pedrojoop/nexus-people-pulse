import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { Plus, AlertTriangle, Calendar, Users, TrendingUp, Settings, Eye, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Rituais Totais", value: "24", icon: Calendar },
  { label: "Rituais Ativos", value: "18", icon: TrendingUp },
  { label: "Taxa de Sucesso Média", value: "82%", icon: TrendingUp },
  { label: "Participantes Total", value: "247", icon: Users },
];

const rituals = [
  {
    id: 1,
    title: "Weekly Team Sync",
    frequency: "Semanal",
    department: "Engenharia",
    participants: 24,
    successRate: 92,
    status: "ativo",
    lastExecution: "Há 2 dias"
  },
  {
    id: 2,
    title: "Monthly All-Hands",
    frequency: "Mensal",
    department: "Toda Empresa",
    participants: 247,
    successRate: 88,
    status: "ativo",
    lastExecution: "Há 5 dias"
  },
  {
    id: 3,
    title: "Daily Standup - Design",
    frequency: "Diária",
    department: "Design",
    participants: 12,
    successRate: 65,
    status: "atencao",
    lastExecution: "Há 1 hora"
  },
  {
    id: 4,
    title: "Bi-weekly Retrospective",
    frequency: "Quinzenal",
    department: "Produto",
    participants: 18,
    successRate: 78,
    status: "ativo",
    lastExecution: "Há 3 dias"
  },
  {
    id: 5,
    title: "Friday Happy Hour",
    frequency: "Semanal",
    department: "Toda Empresa",
    participants: 156,
    successRate: 45,
    status: "atencao",
    lastExecution: "Há 2 dias"
  },
  {
    id: 6,
    title: "Knowledge Share Session",
    frequency: "Mensal",
    department: "Tech",
    participants: 45,
    successRate: 95,
    status: "ativo",
    lastExecution: "Há 1 semana"
  },
];

const statusStyles = {
  ativo: {
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    label: "Ativo"
  },
  atencao: {
    badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    label: "Atenção"
  }
};

const CultureService = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <PlatformHeader />
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1600px]">
          <LeftSidebar />
          
          <main className="flex-1 min-h-screen p-8 pt-6">
            <div className="space-y-6 max-w-7xl mx-auto">
              {/* Page Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-dark-fg mb-2">Culture-as-a-Service</h1>
                  <p className="text-dark-fg/60">Gerencie e monitore rituais culturais da empresa</p>
                </div>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow-primary transition-all duration-300 hover:scale-105">
                  <Plus className="w-5 h-5" />
                  Criar Novo Ritual
                </Button>
              </div>

              {/* Top Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <stat.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <p className="text-4xl font-bold text-dark-fg mb-2">{stat.value}</p>
                    <p className="text-sm text-dark-fg/60">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Alert Section */}
              <article
                className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border-2 border-yellow-500/60 shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300 hover:scale-[1.01]"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold border bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                    Atenção
                  </span>
                  <span className="text-xs text-dark-fg/60">Há 1 hora</span>
                </div>

                {/* Main Alert */}
                <h2 className="text-2xl font-bold text-dark-fg mb-3">Falha em Ritual Cultural Detectada</h2>
                <p className="text-dark-fg/80 leading-relaxed mb-4">
                  O ritual "Friday Happy Hour" teve apenas 45% de participação nas últimas 3 execuções, 
                  abaixo da meta de 70%. Recomendamos revisar o formato ou horário.
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow-primary transition-all duration-300 hover:scale-105">
                    <Eye className="w-4 h-4" />
                    Ver Detalhes
                  </Button>
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow-primary transition-all duration-300 hover:scale-105">
                    <Wrench className="w-4 h-4" />
                    Ações Corretivas
                  </Button>
                </div>
              </article>

              {/* Rituais Configurados Section */}
              <div>
                <h2 className="text-2xl font-bold text-dark-fg mb-4">Rituais Configurados</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rituals.map((ritual) => {
                    const statusStyle = statusStyles[ritual.status as keyof typeof statusStyles];
                    
                    return (
                      <article
                        key={ritual.id}
                        className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary hover:border-secondary/40 transition-all duration-300 group"
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-dark-fg group-hover:text-secondary transition-colors">
                            {ritual.title}
                          </h3>
                          <Badge className={`text-xs px-2 py-0.5 border ${statusStyle.badge}`}>
                            {statusStyle.label}
                          </Badge>
                        </div>

                        {/* Details */}
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-dark-fg/60">Frequência</span>
                            <span className="text-sm text-dark-fg font-medium">{ritual.frequency}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-dark-fg/60">Departamento</span>
                            <span className="text-sm text-dark-fg font-medium">{ritual.department}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-dark-fg/60">Participantes</span>
                            <span className="text-sm text-dark-fg font-medium">{ritual.participants}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-dark-fg/60">Última Execução</span>
                            <span className="text-sm text-dark-fg font-medium">{ritual.lastExecution}</span>
                          </div>
                        </div>

                        {/* Success Rate */}
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-dark-fg/70">Taxa de Sucesso</span>
                            <span className="text-secondary font-semibold">{ritual.successRate}%</span>
                          </div>
                          <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary/10">
                            <div 
                              className="h-full bg-gradient-beige transition-all duration-500 rounded-full"
                              style={{ 
                                width: `${ritual.successRate}%`,
                                boxShadow: '0 0 12px hsl(var(--secondary) / 0.5)'
                              }}
                            />
                          </div>
                        </div>

                        {/* Action */}
                        <button className="w-full text-center text-sm text-secondary hover:text-secondary/80 transition-colors font-medium pt-4 border-t border-secondary/10">
                          <div className="flex items-center justify-center gap-2">
                            <Settings className="w-4 h-4" />
                            Gerenciar Ritual
                          </div>
                        </button>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CultureService;
