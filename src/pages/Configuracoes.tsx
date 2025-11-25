import { useState } from "react";
import { Settings, Plus, Building2, Users, Shield, Edit2, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const departamentosData = [
  { id: 1, nome: "Tecnologia", gestor: "Carlos Silva", membros: 12 },
  { id: 2, nome: "Marketing", gestor: "Ana Santos", membros: 8 },
  { id: 3, nome: "Recursos Humanos", gestor: "Paula Costa", membros: 5 },
  { id: 4, nome: "Vendas", gestor: "Roberto Lima", membros: 15 },
];

const usuariosData = [
  { id: 1, nome: "Carlos Silva", email: "carlos@empresa.com", cargo: "Tech Lead", departamento: "Tecnologia" },
  { id: 2, nome: "Ana Santos", email: "ana@empresa.com", cargo: "Gerente de Marketing", departamento: "Marketing" },
  { id: 3, nome: "Paula Costa", email: "paula@empresa.com", cargo: "Coordenadora de RH", departamento: "Recursos Humanos" },
  { id: 4, nome: "Roberto Lima", email: "roberto@empresa.com", cargo: "Gerente Comercial", departamento: "Vendas" },
  { id: 5, nome: "Maria Oliveira", email: "maria@empresa.com", cargo: "Desenvolvedora", departamento: "Tecnologia" },
];

const cargosData = [
  { id: 1, nome: "Administrador", nivel: "C-Level", usuarios: 2 },
  { id: 2, nome: "Gerente", nivel: "Gestão", usuarios: 4 },
  { id: 3, nome: "Coordenador", nivel: "Gestão", usuarios: 3 },
  { id: 4, nome: "Analista", nivel: "Operacional", usuarios: 8 },
  { id: 5, nome: "Assistente", nivel: "Operacional", usuarios: 5 },
];

const permissoesData = {
  "Sistema e Administração": [
    { id: "config_geral", label: "Configurações Gerais", enabled: true },
    { id: "usuarios", label: "Gerenciar Usuários", enabled: true },
    { id: "departamentos", label: "Gerenciar Departamentos", enabled: true },
    { id: "backup", label: "Backup e Restauração", enabled: false },
  ],
  "Gestão de Pessoas": [
    { id: "cultura", label: "Acessar IA de Cultura", enabled: true },
    { id: "caas", label: "Culture-as-a-Service", enabled: true },
    { id: "lms_admin", label: "Administrar Treinamentos", enabled: true },
    { id: "lms_view", label: "Visualizar Treinamentos", enabled: true },
  ],
  "Gamificação": [
    { id: "game_admin", label: "Administrar Gamificação", enabled: true },
    { id: "game_view", label: "Visualizar Ranking", enabled: true },
    { id: "recompensas", label: "Gerenciar Recompensas", enabled: false },
  ],
  "Comunicação": [
    { id: "chat", label: "Chat Interno", enabled: true },
    { id: "eventos", label: "Criar Eventos", enabled: true },
    { id: "anuncios", label: "Publicar Anúncios", enabled: false },
  ],
};

export default function Configuracoes() {
  const [selectedCargo, setSelectedCargo] = useState("Administrador");

  return (
    <div className="min-h-screen bg-[hsl(var(--dark-bg))]">
      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 rounded-xl bg-gradient-card backdrop-blur-xl border border-secondary/20">
              <Settings className="w-6 h-6 text-secondary" />
            </div>
            <h1 className="text-4xl font-bold text-[hsl(var(--dark-fg))]">Configurações</h1>
          </div>
          <p className="text-[hsl(var(--dark-fg))]/60 text-lg">
            Gerencie departamentos, usuários e permissões da plataforma
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="departamentos" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList className="bg-[hsl(var(--dark-bg))]/50 backdrop-blur-xl border border-secondary/20">
              <TabsTrigger value="departamentos" className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary">
                <Building2 className="w-4 h-4 mr-2" />
                Departamentos
              </TabsTrigger>
              <TabsTrigger value="usuarios" className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary">
                <Users className="w-4 h-4 mr-2" />
                Usuários
              </TabsTrigger>
              <TabsTrigger value="permissoes" className="data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary">
                <Shield className="w-4 h-4 mr-2" />
                Cargos e Permissões
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab 1: Departamentos */}
          <TabsContent value="departamentos" className="space-y-4">
            <div className="flex justify-end mb-4">
              <Button className="bg-secondary text-primary hover:bg-secondary/90 shadow-[var(--glow-primary)]">
                <Plus className="w-4 h-4 mr-2" />
                Novo Departamento
              </Button>
            </div>

            <div className="space-y-3">
              {departamentosData.map((dept) => (
                <div
                  key={dept.id}
                  className="group p-6 rounded-xl bg-gradient-card backdrop-blur-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 shadow-lg hover:shadow-[var(--glow-primary)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6 flex-1">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[hsl(var(--dark-fg))] mb-1">
                          {dept.nome}
                        </h3>
                        <p className="text-sm text-[hsl(var(--dark-fg))]/60">
                          Gestor: {dept.gestor}
                        </p>
                      </div>
                      <div className="text-center px-6">
                        <p className="text-2xl font-bold text-secondary">{dept.membros}</p>
                        <p className="text-xs text-[hsl(var(--dark-fg))]/60">membros</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="text-secondary hover:bg-secondary/20">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-secondary hover:bg-secondary/20">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Tab 2: Usuários */}
          <TabsContent value="usuarios" className="space-y-4">
            <div className="flex justify-end mb-4">
              <Button className="bg-secondary text-primary hover:bg-secondary/90 shadow-[var(--glow-primary)]">
                <Plus className="w-4 h-4 mr-2" />
                Novo Usuário
              </Button>
            </div>

            <div className="space-y-3">
              {usuariosData.map((usuario) => (
                <div
                  key={usuario.id}
                  className="group p-6 rounded-xl bg-gradient-card backdrop-blur-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 shadow-lg hover:shadow-[var(--glow-primary)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8 flex-1">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-[hsl(var(--dark-fg))] mb-1">
                          {usuario.nome}
                        </h3>
                        <p className="text-sm text-[hsl(var(--dark-fg))]/60">{usuario.email}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[hsl(var(--dark-fg))]/80 mb-1">
                          {usuario.cargo}
                        </p>
                        <p className="text-xs text-[hsl(var(--dark-fg))]/60">{usuario.departamento}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="text-secondary hover:bg-secondary/20">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-secondary hover:bg-secondary/20">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Tab 3: Cargos e Permissões */}
          <TabsContent value="permissoes" className="space-y-6">
            {/* Cargos Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-fg))]">Cargos</h2>
                <Button className="bg-secondary text-primary hover:bg-secondary/90 shadow-[var(--glow-primary)]">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Cargo
                </Button>
              </div>

              <div className="space-y-3 mb-8">
                {cargosData.map((cargo) => (
                  <div
                    key={cargo.id}
                    className="group p-6 rounded-xl bg-gradient-card backdrop-blur-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300 shadow-lg hover:shadow-[var(--glow-primary)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-8 flex-1">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[hsl(var(--dark-fg))] mb-1">
                            {cargo.nome}
                          </h3>
                          <p className="text-sm text-[hsl(var(--dark-fg))]/60">Nível: {cargo.nivel}</p>
                        </div>
                        <div className="text-center px-6">
                          <p className="text-2xl font-bold text-secondary">{cargo.usuarios}</p>
                          <p className="text-xs text-[hsl(var(--dark-fg))]/60">usuários</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="text-secondary hover:bg-secondary/20">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-secondary hover:bg-secondary/20">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Permissões Section */}
            <div className="border-t border-secondary/20 pt-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[hsl(var(--dark-fg))] mb-4">
                  Permissões por Cargo
                </h2>
                <div className="max-w-xs">
                  <label className="text-sm text-[hsl(var(--dark-fg))]/80 mb-2 block">
                    Selecione o Cargo
                  </label>
                  <Select value={selectedCargo} onValueChange={setSelectedCargo}>
                    <SelectTrigger className="bg-[hsl(var(--dark-bg))]/50 backdrop-blur-xl border-secondary/20 text-[hsl(var(--dark-fg))]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[hsl(var(--dark-bg))] backdrop-blur-xl border-secondary/20">
                      {cargosData.map((cargo) => (
                        <SelectItem key={cargo.id} value={cargo.nome} className="text-[hsl(var(--dark-fg))]">
                          {cargo.nome}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Accordion type="multiple" className="space-y-3">
                {Object.entries(permissoesData).map(([grupo, permissoes]) => (
                  <AccordionItem
                    key={grupo}
                    value={grupo}
                    className="rounded-xl bg-gradient-card backdrop-blur-xl border border-secondary/20 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/5 transition-colors">
                      <span className="text-lg font-semibold text-[hsl(var(--dark-fg))]">{grupo}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-4 pt-2">
                        {permissoes.map((permissao) => (
                          <div
                            key={permissao.id}
                            className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-secondary/5 transition-colors"
                          >
                            <label
                              htmlFor={permissao.id}
                              className="text-sm text-[hsl(var(--dark-fg))]/80 cursor-pointer flex-1"
                            >
                              {permissao.label}
                            </label>
                            <Switch
                              id={permissao.id}
                              checked={permissao.enabled}
                              className="data-[state=checked]:bg-secondary"
                            />
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
