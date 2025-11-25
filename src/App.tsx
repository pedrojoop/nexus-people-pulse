import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import Dashboard from "./pages/Dashboard";
import CulturaIA from "./pages/CulturaIA";
import CultureService from "./pages/CultureService";
import LMS from "./pages/LMS";
import Gamification from "./pages/Gamification";
import Configuracoes from "./pages/Configuracoes";
import Chat from "./pages/Chat";
import Eventos from "./pages/Eventos";
import Documentos from "./pages/Documentos";
import Pessoas from "./pages/Pessoas";
import Problema from "./pages/Problema";
import Servicos from "./pages/Servicos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/problema" element={<Problema />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cultura-ia" element={<CulturaIA />} />
          <Route path="/culture-service" element={<CultureService />} />
          <Route path="/lms" element={<LMS />} />
          <Route path="/gamification" element={<Gamification />} />
          <Route path="/platform/config" element={<Configuracoes />} />
          <Route path="/platform/chat" element={<Chat />} />
            <Route path="/platform/eventos" element={<Eventos />} />
            <Route path="/platform/documentos" element={<Documentos />} />
            <Route path="/platform/pessoas" element={<Pessoas />} />
          <Route path="/platform/*" element={<Platform />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
