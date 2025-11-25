import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FinalCTA = () => {
  return (
    <section className="py-32 px-6 bg-gradient-hero relative overflow-hidden">
      {/* Ambient glow effects - Nexus Spark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 blur-3xl rounded-full animate-glow-pulse" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 mb-6">
          <span className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" />
          <span className="text-sm font-semibold text-secondary">Transformação começa aqui</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-dark-fg mb-6 leading-tight">
          Sua cultura não é um palpite.
          <br />
          É <span className="bg-gradient-beige bg-clip-text text-transparent">ciência</span>.
        </h2>
        
        <p className="text-xl md:text-2xl text-secondary/80 mb-12 leading-relaxed max-w-3xl mx-auto">
          Agende uma demo founder-led e veja como empresas líderes estão transformando 
          "feeling" em estratégia data-driven.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-secondary text-primary hover:bg-secondary/90 hover:shadow-glow-primary transition-all duration-300 text-lg px-10 py-7 group font-semibold"
            asChild
          >
            <Link to="/platform">
              <Calendar className="mr-2 group-hover:scale-110 transition-transform" />
              Agendar Demo Founder-Led
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-secondary/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span>Setup em 15 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span>Sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span>Suporte founder direto</span>
          </div>
        </div>
      </div>
    </section>
  );
};
