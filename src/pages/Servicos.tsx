import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import { Link } from "react-router-dom";
import { ArrowRight, Users, GraduationCap, Rocket, FileText } from "lucide-react";
import nexusWaveChart from "@/assets/nexus-wave-chart.png";

const Servicos = () => {
  return (
    <div className="min-h-screen bg-primary">
      <NavBar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Page Headline */}
          <div className="text-center mb-20 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-8 leading-tight">
              Os Sensores e o Cérebro da sua Cultura.
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary/80 max-w-4xl mx-auto font-light leading-relaxed">
              Uma plataforma desenhada em duas partes: uma experiência que seu time ama usar e uma inteligência que te entrega os diagnósticos que você precisa.
            </p>
          </div>

          {/* Section 1: Os Sensores */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary text-center mb-16 animate-fade-up">
              Primeiro, uma experiência que seu time ama.
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1: Comunidade & Rituais */}
              <div className="group bg-primary/80 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl hover:shadow-2xl hover:border-secondary/40 transition-all animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-all">
                  <Users className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Comunidade & Rituais</h3>
                <p className="text-secondary/80 text-lg leading-relaxed">
                  Crie um senso de pertencimento com um feed social, eventos e rituais (Culture-as-a-Service) que conectam as pessoas.
                </p>
              </div>

              {/* Card 2: Treinamentos & LMS */}
              <div className="group bg-primary/80 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl hover:shadow-2xl hover:border-secondary/40 transition-all animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-all">
                  <GraduationCap className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Treinamentos & LMS</h3>
                <p className="text-secondary/80 text-lg leading-relaxed">
                  Incentive o desenvolvimento contínuo com uma plataforma de aprendizado (LMS) integrada e fácil de usar.
                </p>
              </div>

              {/* Card 3: Gamificação */}
              <div className="group bg-primary/80 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl hover:shadow-2xl hover:border-secondary/40 transition-all animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-all">
                  <Rocket className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Gamificação</h3>
                <p className="text-secondary/80 text-lg leading-relaxed">
                  Transforme o engajamento em um jogo com missões, níveis e recompensas que motivam a participação.
                </p>
              </div>

              {/* Card 4: Documentos & Pessoas */}
              <div className="group bg-primary/80 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl hover:shadow-2xl hover:border-secondary/40 transition-all animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-all">
                  <FileText className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Documentos & Pessoas</h3>
                <p className="text-secondary/80 text-lg leading-relaxed">
                  Centralize documentos importantes e facilite a busca por colegas em um diretório de pessoas simples e intuitivo.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: O Cérebro */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text */}
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-8 leading-tight">
                  Depois, a IA que Transforma Engajamento em Insight.
                </h2>
                <div className="space-y-6 text-secondary/90 text-lg leading-relaxed">
                  <p>
                    Nossa IA analisa os dados passivos e anônimos gerados pelos "sensores" para identificar riscos sistêmicos, como burnout e desalinhamento.
                  </p>
                  <p>
                    Protegemos sempre o indivíduo, diagnosticando apenas o sistema (times e squads).
                  </p>
                  <p className="font-semibold text-secondary">
                    Você recebe alertas claros sobre o que está acontecendo e recomendações acionáveis sobre o que fazer.
                  </p>
                </div>
              </div>

              {/* Right Column - Visual */}
              <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/10 blur-3xl" />
                  <img 
                    src={nexusWaveChart} 
                    alt="The Nexus Wave - transforming noisy data into clear team health insights" 
                    className="w-full h-auto relative z-10 animate-float rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-32 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-8">
              Pronto para ativar a inteligência da sua cultura?
            </h2>
            <Button 
              size="lg" 
              className="bg-secondary text-primary hover:bg-secondary/90 hover:shadow-glow-primary transition-all duration-300 text-lg px-10 py-7 font-semibold"
              asChild
            >
              <Link to="/#pricing">
                Veja Nossos Planos
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
