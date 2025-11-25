import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { Shield, AlertTriangle, TrendingDown, Users, Calendar, BookOpen, MessageCircle, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const alerts = [
  {
    id: 1,
    priority: "alta",
    priorityLabel: "Alta Prioridade",
    timestamp: "Há 2 horas",
    title: "Queda de Engajamento no Departamento de TI",
    description: "O engajamento do time de TI caiu 30% nas últimas duas semanas. Identificamos baixa participação em rituais e ausência em eventos.",
    insights: [
      "5 membros não participaram das últimas 3 daily meetings",
      "Taxa de resposta em enquetes caiu de 85% para 55%",
      "Nenhum post interno nos últimos 7 dias"
    ],
    suggestedActions: [
      { label: "Agendar Retrospectiva de Sprint", icon: Calendar },
      { label: "Criar Treinamento de Engajamento", icon: BookOpen },
      { label: "Iniciar Conversas 1:1", icon: MessageCircle }
    ]
  },
  {
    id: 2,
    priority: "atencao",
    priorityLabel: "Atenção",
    timestamp: "Há 5 horas",
    title: "Possível Sobrecarga no Time de Produto",
    description: "Detectamos sinais de burnout em 3 membros do time de Produto. Horas extras aumentaram 40% e feedbacks indicam estresse.",
    insights: [
      "Média de horas extras: 12h/semana (normal: 3h)",
      "2 membros mencionaram 'sobrecarga' em feedback",
      "Taxa de conclusão de tarefas caiu 25%"
    ],
    suggestedActions: [
      { label: "Redistribuir Carga de Trabalho", icon: Users },
      { label: "Agendar Day Off Emergencial", icon: Calendar },
      { label: "Reunião de Alinhamento", icon: MessageCircle }
    ]
  },
  {
    id: 3,
    priority: "oportunidade",
    priorityLabel: "Oportunidade",
    timestamp: "Há 1 dia",
    title: "Alta Colaboração Cross-Team Detectada",
    description: "O time de Design e Engenharia estão colaborando 50% mais que o esperado. Momento ideal para reforçar esta sinergia.",
    insights: [
      "15 interações entre times esta semana (média: 8)",
      "3 projetos conjuntos iniciados",
      "Feedback positivo de ambos os líderes"
    ],
    suggestedActions: [
      { label: "Reconhecer Publicamente", icon: Users },
      { label: "Criar Workshop Conjunto", icon: BookOpen },
      { label: "Documentar Best Practices", icon: MessageCircle }
    ]
  }
];

const priorityStyles = {
  alta: {
    border: "border-red-500/60",
    glow: "shadow-[0_0_20px_rgba(239,68,68,0.4)]",
    badge: "bg-red-500/20 text-red-300 border-red-500/30"
  },
  atencao: {
    border: "border-yellow-500/60",
    glow: "shadow-[0_0_20px_rgba(234,179,8,0.4)]",
    badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
  },
  oportunidade: {
    border: "border-emerald-500/60",
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.4)]",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
  }
};

const CulturaIA = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <PlatformHeader />
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1600px]">
          <LeftSidebar />
          
          <main className="flex-1 min-h-screen p-8 pt-6">
            <div className="space-y-6 max-w-5xl mx-auto">
              {/* Page Header */}
              <div>
                <h1 className="text-4xl font-bold text-dark-fg mb-2">IA de Cultura e Engajamento</h1>
                <p className="text-dark-fg/60">Insights inteligentes para líderes e gestores</p>
              </div>

              {/* Privacy Disclaimer Card */}
              <div className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 shadow-glow-secondary">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-fg mb-2">Privacidade e Ética Garantidas</h3>
                    <p className="text-dark-fg/70 text-sm leading-relaxed">
                      <strong className="text-secondary">Nossa promessa "Anti-Big Brother":</strong> Esta IA analisa apenas dados agregados e anônimos. 
                      Nenhum comportamento individual é monitorado. Todas as sugestões focam no bem-estar coletivo e crescimento 
                      sustentável da equipe. Você está no controle total das ações.
                    </p>
                  </div>
                </div>
              </div>

              {/* Alerts & Suggestions */}
              <div className="space-y-6">
                {alerts.map((alert) => {
                  const styles = priorityStyles[alert.priority as keyof typeof priorityStyles];
                  
                  return (
                    <article
                      key={alert.id}
                      className={`p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border-2 ${styles.border} ${styles.glow} transition-all duration-300 hover:scale-[1.01]`}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${styles.badge}`}>
                          {alert.priorityLabel}
                        </span>
                        <span className="text-xs text-dark-fg/60">{alert.timestamp}</span>
                      </div>

                      {/* Main Insight */}
                      <h2 className="text-2xl font-bold text-dark-fg mb-3">{alert.title}</h2>
                      <p className="text-dark-fg/80 leading-relaxed mb-4">{alert.description}</p>

                      {/* Insights List */}
                      <div className="p-4 rounded-xl bg-dark-bg/40 border border-secondary/10 mb-6">
                        <h3 className="text-sm font-semibold text-dark-fg mb-3 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-secondary" />
                          Dados Detectados
                        </h3>
                        <ul className="space-y-2">
                          {alert.insights.map((insight, idx) => (
                            <li key={idx} className="text-sm text-dark-fg/70 flex items-start gap-2">
                              <span className="text-secondary mt-1">•</span>
                              <span>{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-dark-fg">Ações Sugeridas</h3>
                        <div className="flex flex-wrap gap-3">
                          {alert.suggestedActions.map((action, idx) => (
                            <Button
                              key={idx}
                              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow-primary transition-all duration-300 hover:scale-105"
                            >
                              <action.icon className="w-4 h-4" />
                              {action.label}
                            </Button>
                          ))}
                        </div>
                        
                        {/* Secondary Actions */}
                        <div className="flex items-center gap-6 pt-4 border-t border-secondary/10">
                          <button className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm font-medium">
                            <CheckCircle className="w-4 h-4" />
                            Marcar como Concluído
                          </button>
                          <button className="flex items-center gap-2 text-dark-fg/60 hover:text-dark-fg/80 transition-colors text-sm">
                            <X className="w-4 h-4" />
                            Dispensar
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-gradient-card backdrop-blur-xl border border-secondary/20 text-center">
                  <p className="text-3xl font-bold text-dark-fg mb-1">3</p>
                  <p className="text-sm text-dark-fg/60">Alertas Ativos</p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-card backdrop-blur-xl border border-secondary/20 text-center">
                  <p className="text-3xl font-bold text-dark-fg mb-1">12</p>
                  <p className="text-sm text-dark-fg/60">Ações Tomadas (mês)</p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-card backdrop-blur-xl border border-secondary/20 text-center">
                  <p className="text-3xl font-bold text-secondary mb-1">94%</p>
                  <p className="text-sm text-dark-fg/60">Taxa de Precisão</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CulturaIA;
