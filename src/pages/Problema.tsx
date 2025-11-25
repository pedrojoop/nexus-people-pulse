import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import stressedWorker from "@/assets/stressed-remote-worker.png";

const Problema = () => {
  return (
    <div className="min-h-screen bg-primary">
      <NavBar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Content */}
          <div className="text-center mb-16 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-8 leading-tight">
              A Cegueira Gerencial no Trabalho Remoto.
            </h1>
            
            <p className="text-2xl md:text-3xl text-secondary/80 mb-12 font-light leading-relaxed">
              Líderes voam às cegas sobre a saúde do time, descobrindo o burnout apenas na demissão.
            </p>
          </div>

          {/* Body Text */}
          <div className="prose prose-lg prose-invert mx-auto mb-16 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-secondary/90 text-lg md:text-xl leading-relaxed space-y-6">
              <p>
                Acreditamos que, embora o trabalho remoto e híbrido tenha trazido liberdade, ele não pode custar a conexão humana e o colapso da empresa por cegueira gerencial.
              </p>
              
              <p>
                O problema não é a distância física. O problema é a falta de instrumentos para diagnosticar a saúde cultural de times distribuídos. Gestores dependem de "achismos", reuniões de 1:1 esporádicas, e percepções superficiais.
              </p>
              
              <p>
                Enquanto isso, burnout silencioso cresce, engajamento despenca, e a desconexão se torna a norma. Quando o líder finalmente percebe, já é tarde: o talento saiu pela porta.
              </p>
              
              <p className="font-semibold text-secondary">
                A gestão de pessoas não pode mais ser baseada em intuição. Ela precisa de dados. Mas dados que não percam a humanidade.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="mb-16 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden border border-secondary/20 shadow-2xl">
              <img 
                src={stressedWorker} 
                alt="Professional struggling with remote work isolation and burnout" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-secondary text-primary hover:bg-secondary/90 hover:shadow-glow-primary transition-all duration-300 text-lg px-10 py-7 font-semibold"
              asChild
            >
              <Link to="/#solution">
                Veja como resolvemos
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Problema;
