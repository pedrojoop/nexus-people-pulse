import { Bell, Plus, Search, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const PlatformHeader = () => {
  const navigate = useNavigate();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary/10 bg-gradient-card backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-8 max-w-[1600px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-beige flex items-center justify-center">
            <span className="text-primary font-bold text-lg">N</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-dark-fg">Nexus</h1>
            <p className="text-xs text-dark-fg/60">People & Culture</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="p-2 rounded-lg hover:bg-secondary/10 transition-colors">
            <Search className="w-5 h-5 text-dark-fg/60" />
          </button>

          {/* Nova Postagem */}
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow-primary">
            <Plus className="w-4 h-4" />
            <span>Nova Postagem</span>
          </Button>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-secondary/10 transition-colors">
            <Bell className="w-5 h-5 text-dark-fg/60" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full shadow-glow-secondary"></span>
          </button>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/10 transition-colors">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-dark-fg font-semibold text-sm">VC</span>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-dark-bg border-secondary/20">
              <div className="px-2 py-3">
                <p className="text-sm font-semibold text-dark-fg">Você</p>
                <p className="text-xs text-dark-fg/60">voce@empresa.com</p>
              </div>
              <DropdownMenuSeparator className="bg-secondary/10" />
              <DropdownMenuItem 
                className="text-dark-fg hover:bg-secondary/10 cursor-pointer"
                onClick={() => navigate('/dashboard')}
              >
                <User className="w-4 h-4 mr-2" />
                Meu Dashboard
              </DropdownMenuItem>
              <DropdownMenuItem className="text-dark-fg hover:bg-secondary/10 cursor-pointer">
                <Settings className="w-4 h-4 mr-2" />
                Configurações
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-secondary/10" />
              <DropdownMenuItem className="text-dark-fg hover:bg-secondary/10 cursor-pointer">
                <LogOut className="w-4 h-4 mr-2" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
