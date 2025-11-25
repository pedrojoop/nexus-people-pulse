import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-32 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary opacity-10 blur-3xl rounded-full animate-glow-pulse" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
          <span className="text-sm font-semibold text-primary">Transformação começa aqui</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Sua cultura não é um palpite.
          <br />
          É <span className="bg-gradient-primary bg-clip-text text-transparent">ciência</span>.
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
          Agende uma demo founder-led e veja como empresas líderes estão transformando 
          "feeling" em estratégia data-driven.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-10 py-7 group"
          >
            <Calendar className="mr-2 group-hover:scale-110 transition-transform" />
            Agendar Demo Founder-Led
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Setup em 15 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span>Suporte founder direto</span>
          </div>
        </div>
      </div>
    </section>
  );
};
