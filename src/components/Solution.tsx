import { Brain, Heart, TrendingUp, Zap, MessageSquare, GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Solution = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-4">
            <Zap className="text-primary" size={16} />
            <span className="text-sm font-semibold text-primary">A Arquitetura Nexus</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            O Cérebro e os Sensores do Nexus
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma plataforma que seus times amam usar, alimentando uma IA que você vai amar consultar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Os Sensores */}
          <div className="space-y-6 animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Heart className="text-secondary" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Os Sensores</h3>
                <p className="text-muted-foreground">Engajamento que o time ama</p>
              </div>
            </div>

            <Card className="p-6 border-2 border-secondary/20 hover:shadow-lg transition-all group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Feed Inteligente</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Conversas orgânicas, reações ricas, pulsos de sentimento em tempo real. 
                    Parece Slack, mas coleta inteligência emocional.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-secondary/20 hover:shadow-lg transition-all group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">LMS & Growth</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Trilhas de aprendizado gamificadas. Investimento em pessoas mensurável.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-secondary/20 hover:shadow-lg transition-all group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Calendar className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Rituais & Conexão</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    1-on-1s, retrospectivas, celebrações. A cola social do time remoto.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* O Cérebro */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">O Cérebro</h3>
                <p className="text-muted-foreground">IA Diagnóstica</p>
              </div>
            </div>

            <Card className="p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-all">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <TrendingUp className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-2">Análise Preditiva</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Detecta padrões de fadiga, sobrecarga e desengajamento antes que virem estatísticas de turnover.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-background border-2 border-secondary/30">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 animate-glow-pulse" />
                    <div>
                      <p className="font-semibold text-primary text-sm mb-1">Alerta Inteligente</p>
                      <p className="text-xs text-muted-foreground">Detectado há 2 horas</p>
                    </div>
                  </div>
                  <p className="text-sm text-primary leading-relaxed mb-3">
                    "O time de Design apresenta risco de sobrecarga. Engajamento em queda de 23% nas últimas 2 semanas."
                  </p>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/10 border border-secondary/30">
                    <Zap className="text-primary flex-shrink-0" size={16} />
                    <p className="text-xs font-medium text-primary">
                      Sugestão: Rever rituais de sexta-feira e redistribuir demandas de Q1
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/30">
                  <p className="text-sm font-medium text-primary text-center">
                    Insights acionáveis, não apenas números bonitos
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
