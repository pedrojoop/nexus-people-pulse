import { Shield, Eye, Lock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import ethicsShield from "@/assets/ethics-shield.png";

export const Ethics = () => {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="animate-fade-up order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <img 
                src={ethicsShield} 
                alt="Ethics Shield - Trust and Data Protection" 
                className="w-full max-w-md mx-auto relative z-10 drop-shadow-2xl animate-float"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-up order-1 md:order-2" style={{ animationDelay: '0.1s' }}>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Shield className="text-primary" size={16} />
                <span className="text-sm font-semibold text-primary">Nosso Diferencial</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Anti-Big Brother{" "}
                <span className="text-primary">por Design</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Monitoramos o sistema, nunca o indivíduo. Dados anônimos e agregados para proteger a confiança do seu time.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-6 border-2 border-primary/20 hover:shadow-lg transition-all group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Eye className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Transparência Total</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Todos sabem quais dados coletamos e por quê. Zero caixas-pretas.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-primary/20 hover:shadow-lg transition-all group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Lock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Anonimização Real</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Agregação automática em nível de squad. Impossível rastrear indivíduos.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-primary/20 hover:shadow-lg transition-all group cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Controle do Time</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Opt-in voluntário. Dados pertencem ao coletivo, não à empresa.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="p-6 rounded-xl bg-gradient-card border-2 border-primary/30">
              <p className="text-base font-semibold text-foreground text-center leading-relaxed">
                "Ferramentas de vigilância destroem cultura. <br />
                Nós construímos ferramentas de <span className="text-primary">consciência coletiva</span>."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
