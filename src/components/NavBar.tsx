import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const NavBar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-primary/80 backdrop-blur-md border border-secondary/20 rounded-full px-8 py-4 shadow-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center border border-secondary/30 group-hover:bg-secondary/30 transition-all">
                <span className="text-xl font-bold text-secondary">N</span>
              </div>
              <span className="ml-3 text-xl font-bold text-secondary">Nexus</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("hero")}
                className={`text-sm font-medium transition-all hover:text-secondary ${
                  isActive("/") ? "text-secondary font-semibold" : "text-secondary/70"
                }`}
              >
                Início
              </button>
              <Link
                to="/problema"
                className={`text-sm font-medium transition-all hover:text-secondary ${
                  isActive("/problema") ? "text-secondary font-semibold" : "text-secondary/70"
                }`}
              >
                Problema
              </Link>
              <button
                onClick={() => scrollToSection("solution")}
                className="text-sm font-medium text-secondary/70 hover:text-secondary transition-all"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm font-medium text-secondary/70 hover:text-secondary transition-all"
              >
                Preços
              </button>
              <Link
                to="/platform"
                className={`text-sm font-medium transition-all hover:text-secondary ${
                  isActive("/platform") ? "text-secondary font-semibold" : "text-secondary/70"
                }`}
              >
                Plataforma
              </Link>
            </div>

            {/* CTA Button */}
            <Button 
              className="bg-secondary text-primary hover:bg-secondary/90 hover:shadow-glow-primary transition-all font-semibold hidden md:flex"
              asChild
            >
              <Link to="/platform">
                Começar Diagnóstico Gratuito
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-secondary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
