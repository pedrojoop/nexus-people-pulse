import { AlertCircle, BarChart3, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Problem = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Você sabe quem está à beira do{" "}
            <span className="text-destructive">burnout</span> hoje?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A gestão remota criou pontos cegos que nenhum dashboard de produtividade consegue revelar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Old Way */}
          <Card className="p-8 border-2 border-destructive/20 bg-card hover:shadow-lg transition-shadow animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="text-destructive" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">O Jeito Antigo</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="text-muted-foreground mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Time Tracking</p>
                  <p className="text-sm text-muted-foreground">Medir horas, não impacto</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <BarChart3 className="text-muted-foreground mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Jira Tickets</p>
                  <p className="text-sm text-muted-foreground">Output ≠ Engajamento</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="text-muted-foreground mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-foreground">Palpites Gerenciais</p>
                  <p className="text-sm text-muted-foreground">"Acho que o time está bem..."</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-destructive/5 border border-destructive/20">
              <p className="text-sm font-medium text-destructive">
                Resultado: Burnout silencioso e turnover caro
              </p>
            </div>
          </Card>

          {/* New Reality */}
          <Card className="p-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-secondary animate-glow-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-primary">A Realidade</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="font-semibold text-foreground mb-1">Dados Humanos</p>
                <p className="text-sm text-muted-foreground">
                  Sentimento, conexão, rituais
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="font-semibold text-foreground mb-1">Contexto Real</p>
                <p className="text-sm text-muted-foreground">
                  O que as métricas frias não capturam
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-background border border-border">
                <p className="font-semibold text-foreground mb-1">Diagnóstico Precoce</p>
                <p className="text-sm text-muted-foreground">
                  Agir antes do colapso
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-secondary/10 border border-secondary/30">
              <p className="text-sm font-medium text-primary">
                Solução: Cultura mensurável e acionável
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
