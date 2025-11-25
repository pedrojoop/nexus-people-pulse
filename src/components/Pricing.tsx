import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useState } from "react";

export const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 px-6 bg-muted">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Planos que evoluem com a sua cultura.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comece a engajar ou vá direto ao diagnóstico. Nossos planos são desenhados para cada fase da sua empresa.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-background rounded-full border border-border">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !isAnnual ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full transition-all ${
                isAnnual ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Anual
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Engage Plan */}
          <div className="relative group animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="h-full bg-primary/95 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl transition-all hover:shadow-2xl hover:scale-105">
              <h3 className="text-2xl font-bold text-secondary mb-2">Engage</h3>
              <p className="text-secondary/80 text-sm mb-6">A fundação da sua cultura.</p>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-secondary mb-2">
                  R$ {isAnnual ? "1.161" : "1.290"}
                </div>
                <div className="text-secondary/70 text-sm">
                  /mês {isAnnual && <span className="text-secondary/90">(pago anualmente)</span>}
                </div>
              </div>

              <div className="text-secondary/80 text-sm mb-6 pb-6 border-b border-secondary/20">
                Para times de até 50 usuários
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/90">LMS & Gamificação</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/90">Comunidade (Feed & Eventos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/90">Rituais (CaaS Básico)</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-secondary/40 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/60">Sem a IA de Diagnóstico</span>
                </li>
              </ul>

              <Button 
                variant="outline" 
                className="w-full border-2 border-secondary/40 text-secondary hover:bg-secondary/10 hover:border-secondary/60"
              >
                Começar Agora
              </Button>
            </div>
          </div>

          {/* Diagnose Plan - Highlighted */}
          <div className="relative group animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="px-4 py-1 bg-secondary text-primary rounded-full text-sm font-semibold">
                Mais Popular
              </div>
            </div>

            <div className="h-full bg-primary/95 backdrop-blur-sm rounded-2xl p-8 border-2 border-secondary shadow-2xl shadow-secondary/20 transition-all hover:shadow-glow-primary hover:scale-105 md:scale-105">
              <h3 className="text-2xl font-bold text-secondary mb-2">Diagnose</h3>
              <p className="text-secondary/80 text-sm mb-6">O diagnóstico acionável.</p>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-secondary mb-2">
                  R$ {isAnnual ? "4.311" : "4.790"}
                </div>
                <div className="text-secondary/70 text-sm">
                  /mês {isAnnual && <span className="text-secondary/90">(pago anualmente)</span>}
                </div>
              </div>

              <div className="text-secondary/80 text-sm mb-6 pb-6 border-b border-secondary/20">
                Para empresas de até 150 usuários
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/90">Tudo do Plano Engage</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/90 font-semibold">A "IA DE DIAGNÓSTICO"</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/90">CaaS Avançado</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/90">Dashboards de Gestor</span>
                </li>
              </ul>

              <Button 
                className="w-full bg-secondary text-primary hover:bg-secondary/90 hover:shadow-glow-primary transition-all font-semibold"
              >
                Começar Agora
              </Button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative group animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="h-full bg-primary/95 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl transition-all hover:shadow-2xl hover:scale-105">
              <h3 className="text-2xl font-bold text-secondary mb-2">Enterprise</h3>
              <p className="text-secondary/80 text-sm mb-6">Escala, Inteligência Avançada e Personalização.</p>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-secondary mb-2">
                  Fale Conosco
                </div>
                <div className="text-secondary/70 text-sm h-5">
                  &nbsp;
                </div>
              </div>

              <div className="text-secondary/80 text-sm mb-6 pb-6 border-b border-secondary/20">
                151+ usuários
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/90">Tudo do Plano Diagnose</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/90">IA Avançada (Benchmarks)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/90">Dashboards C-Level</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/90">Segurança/SSO</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary/90">Opção de White-Label</span>
                </li>
              </ul>

              <Button 
                variant="outline" 
                className="w-full border-2 border-secondary/40 text-secondary hover:bg-secondary/10 hover:border-secondary/60"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
