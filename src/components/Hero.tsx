import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroDashboard from "@/assets/hero-dashboard-new.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-20 pb-32 px-6">
      {/* Ambient glow effects - Nexus Spark */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" />
            <span className="text-sm font-medium text-secondary">Nova Era: People & Culture 2.0</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-dark-fg mb-6 leading-tight">
            Transforme Cultura em{" "}
            <span className="bg-gradient-beige bg-clip-text text-transparent">
              Dados
            </span>
            .<br />
            Sem perder a Humanidade.
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary/80 mb-10 leading-relaxed">
            A primeira plataforma de Diagnóstico de Cultura e Engajamento desenhada para a era híbrida. 
            <br />
            Elimine a cegueira gerencial sem ser o 'Big Brother'.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-secondary text-primary hover:bg-secondary/90 hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-6 group font-semibold"
              asChild
            >
              <Link to="/platform">
                Começar Diagnóstico Gratuito
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-secondary/40 text-secondary hover:bg-secondary/10 hover:border-secondary/60 text-lg px-8 py-6 group"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Ver a Demo Interativa
            </Button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative max-w-6xl mx-auto">
            {/* Glow effect behind dashboard - Nexus Spark */}
            <div className="absolute inset-0 bg-secondary/20 blur-3xl rounded-3xl" />
            
            <div className="relative rounded-2xl overflow-hidden border border-secondary/30 shadow-2xl backdrop-blur-sm bg-primary/30 animate-float">
              <img 
                src={heroDashboard} 
                alt="Nexus Dashboard - Team Pulse Analytics" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
