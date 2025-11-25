import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const SocialProof = () => {
  const companies = [
    { name: "TechCorp", logo: "🚀" },
    { name: "ScaleUp", logo: "📈" },
    { name: "InnovHub", logo: "💡" },
    { name: "CloudFirst", logo: "☁️" },
    { name: "DataLab", logo: "🔬" },
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Companies Grid */}
        <div className="mb-20 animate-fade-up">
          <p className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
            Confiado por empresas que valorizam pessoas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {companies.map((company) => (
              <div 
                key={company.name}
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <span className="text-4xl">{company.logo}</span>
                <span className="text-lg font-semibold text-foreground">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <Card className="max-w-4xl mx-auto p-10 border-2 border-primary/20 bg-gradient-to-br from-secondary/5 to-background hover:shadow-lg transition-all animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
              <Quote className="text-primary" size={32} />
            </div>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-primary leading-relaxed font-medium">
                "Finalmente dados que eu posso levar para a diretoria, sem parecer que estou vigiando meu time. 
                O Nexus nos ajudou a identificar burnout silencioso em 3 squads antes que virasse turnover."
              </p>
              
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-secondary font-bold text-xl">
                  MC
                </div>
                <div>
                  <p className="font-bold text-primary text-lg">Maria Clara Santos</p>
                  <p className="text-muted-foreground">Head of People & Culture</p>
                  <p className="text-sm text-primary font-semibold">TechCorp — 350+ colaboradores</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">78%</div>
            <p className="text-muted-foreground">Redução em turnover inesperado</p>
          </div>
          
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2.4x</div>
            <p className="text-muted-foreground">Aumento em engajamento mensurado</p>
          </div>
          
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15min</div>
            <p className="text-muted-foreground">Setup médio para primeiro insight</p>
          </div>
        </div>
      </div>
    </section>
  );
};
