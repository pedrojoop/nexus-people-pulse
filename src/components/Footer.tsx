import { Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-primary font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold">Nexus</span>
            </div>
            <p className="text-secondary/70 leading-relaxed mb-6 max-w-md">
              Transformando cultura organizacional em ciência data-driven. 
              A primeira plataforma ética de diagnóstico para a era híbrida.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4">Produto</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary/70 hover:text-secondary transition-colors">Features</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-secondary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-secondary transition-colors">Casos de Uso</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-secondary transition-colors">Integrações</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-secondary/70 hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-secondary transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-secondary/70 hover:text-secondary transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-secondary/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/60 text-sm">
            © 2025 Nexus Community. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-secondary/70 hover:text-secondary transition-colors">Privacidade</a>
            <a href="#" className="text-secondary/70 hover:text-secondary transition-colors">Termos</a>
            <a href="#" className="text-secondary/70 hover:text-secondary transition-colors">Ética & LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
