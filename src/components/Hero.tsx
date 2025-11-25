import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary min-h-screen flex items-center justify-center px-6 py-20">
      {/* Subtle ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 backdrop-blur-sm border border-secondary/30 mb-12">
            <span className="w-2 h-2 rounded-full bg-secondary animate-glow-pulse" />
            <span className="text-sm font-medium text-secondary">Nova Era: People & Culture 2.0</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-secondary mb-12 leading-[1.1] tracking-tight">
            Transforme Cultura em{" "}
            <span className="bg-gradient-beige bg-clip-text text-transparent">
              Dados
            </span>
            .<br />
            Sem perder a Humanidade.
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-secondary/80 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
            A primeira plataforma de Diagnóstico de Cultura e Engajamento desenhada para a era híbrida. 
            <br className="hidden md:block" />
            Elimine a cegueira gerencial sem ser o 'Big Brother'.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-secondary text-primary hover:bg-secondary/90 hover:shadow-glow-primary transition-all duration-300 text-lg px-10 py-7 group font-semibold"
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
              className="border-2 border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary/70 text-lg px-10 py-7 group bg-transparent"
            >
              <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Ver a Demo Interativa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
