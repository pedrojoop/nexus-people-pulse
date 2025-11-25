import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/NavBar";
import { Link } from "react-router-dom";
import { ArrowRight, User, Linkedin } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-primary">
      <NavBar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Section 1: Nossa Missão */}
          <div className="text-center mb-32 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-8 leading-tight">
              Nossa Missão: Conectando o Futuro do Trabalho
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary/80 max-w-4xl mx-auto font-light leading-relaxed">
              Nós fundamos a Nexus com uma obsessão: o futuro do trabalho exige conexão humana, cultura forte e retenção estratégica.
            </p>
          </div>

          {/* Section 2: O Que Nos Move */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary text-center mb-16 animate-fade-up">
              Tecnologia a Serviço das Pessoas
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Abordagem Preditiva */}
              <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl hover:shadow-2xl hover:border-secondary/40 transition-all animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-2xl font-bold text-secondary mb-6">Abordagem Preditiva</h3>
                <p className="text-secondary/80 text-lg leading-relaxed mb-4">
                  Acreditamos que a gestão de pessoas não pode mais ser reativa. Burnout, desengajamento e turnover custam caro — em dinheiro e em moral.
                </p>
                <p className="text-secondary/80 text-lg leading-relaxed">
                  Nossa IA foi desenhada para identificar os primeiros sinais de colapso cultural, transformando dados de comportamento em alertas acionáveis.
                </p>
              </div>

              {/* Visão de Ecossistema */}
              <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl hover:shadow-2xl hover:border-secondary/40 transition-all animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-bold text-secondary mb-6">Visão de Ecossistema</h3>
                <p className="text-secondary/80 text-lg leading-relaxed mb-4">
                  Cultura não é um projeto isolado — é o sistema nervoso da organização. Por isso, a Nexus integra engajamento, aprendizado, rituais e diagnóstico em uma única experiência.
                </p>
                <p className="text-secondary/80 text-lg leading-relaxed">
                  Queremos que os líderes tenham uma visão 360° da saúde cultural, sem precisar de 15 ferramentas diferentes.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: A Equipe Fundadora */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary text-center mb-16 animate-fade-up">
              A Equipe Fundadora: Paixão e Execução
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Pedro */}
              <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl hover:shadow-2xl hover:border-secondary/40 transition-all animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mb-6 mx-auto">
                  <User className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary text-center mb-2">Pedro Lima</h3>
                <p className="text-secondary/70 text-center mb-6">CEO & Co-Fundador</p>
                <p className="text-secondary/80 leading-relaxed mb-6">
                  Especialista em transformação cultural e gestão de pessoas. Pedro acredita que dados devem amplificar, e não substituir, a intuição humana dos líderes.
                </p>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-secondary hover:text-secondary/80 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">Ver perfil no LinkedIn</span>
                </a>
              </div>

              {/* João Lucas */}
              <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl hover:shadow-2xl hover:border-secondary/40 transition-all animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mb-6 mx-auto">
                  <User className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary text-center mb-2">João Lucas Costa</h3>
                <p className="text-secondary/70 text-center mb-6">CTO & Co-Fundador</p>
                <p className="text-secondary/80 leading-relaxed mb-6">
                  Engenheiro de IA com expertise em processamento de linguagem natural e análise comportamental. João lidera a construção do cérebro diagnóstico da Nexus.
                </p>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-secondary hover:text-secondary/80 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">Ver perfil no LinkedIn</span>
                </a>
              </div>

              {/* Lucas */}
              <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20 shadow-xl hover:shadow-2xl hover:border-secondary/40 transition-all animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mb-6 mx-auto">
                  <User className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary text-center mb-2">Lucas Mendes</h3>
                <p className="text-secondary/70 text-center mb-6">CPO & Co-Fundador</p>
                <p className="text-secondary/80 leading-relaxed mb-6">
                  Designer de produto com paixão por experiências que conectam pessoas. Lucas garante que a Nexus seja amada pelos times, não apenas tolerada.
                </p>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-secondary hover:text-secondary/80 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">Ver perfil no LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Section 4: Final CTA */}
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              Junte-se a Nós nesta Missão
            </h2>
            <p className="text-xl text-secondary/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              Transforme a cultura da sua empresa e destrave um futuro onde tecnologia e humanidade andam juntas.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary text-primary hover:bg-secondary/90 hover:shadow-glow-primary transition-all duration-300 text-lg px-10 py-7 font-semibold"
              asChild
            >
              <Link to="/contato">
                Fale Conosco
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
