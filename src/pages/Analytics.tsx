import { useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Users, HardDrive, MessageSquare, Heart, MessageCircle, BookOpen, Calendar, Trophy, Star, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { PlatformHeader } from "@/components/platform/PlatformHeader";

const departments = [
  { value: "all", label: "Todos os Departamentos" },
  { value: "rh", label: "Recursos Humanos" },
  { value: "tech", label: "Tecnologia" },
  { value: "marketing", label: "Marketing" },
  { value: "vendas", label: "Vendas" },
  { value: "financeiro", label: "Financeiro" },
];

const engagementData = [
  { name: "Ativos", value: 150, color: "hsl(40, 30%, 77%)" },
  { name: "Inativos", value: 50, color: "hsl(150, 17%, 35%)" },
];

const lmsData = [
  { name: "Conclusão", value: 68, color: "hsl(40, 30%, 77%)" },
  { name: "Abandono", value: 32, color: "hsl(0, 60%, 50%)" },
];

const Analytics = () => {
  const [date, setDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [department, setDepartment] = useState("all");

  return (
    <div className="min-h-screen bg-primary flex">
      <LeftSidebar />
      
      <div className="flex-1 flex flex-col">
        <PlatformHeader />
        
        <main className="flex-1 p-8 overflow-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl font-light text-secondary tracking-wide mb-2">
                Analytics de Gestão
              </h1>
              <p className="text-secondary/60">
                Visão sistêmica de engajamento, cultura e uso da plataforma.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Date Range */}
              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "h-10 px-4 bg-white/5 border-white/10 text-secondary hover:bg-white/10 hover:text-secondary rounded-xl",
                        !date && "text-secondary/50"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : "Data Início"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-primary border-white/10" align="end">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="pointer-events-auto bg-primary text-secondary"
                    />
                  </PopoverContent>
                </Popover>

                <span className="text-secondary/40">até</span>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "h-10 px-4 bg-white/5 border-white/10 text-secondary hover:bg-white/10 hover:text-secondary rounded-xl",
                        !endDate && "text-secondary/50"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "dd/MM/yyyy", { locale: ptBR }) : "Data Fim"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-primary border-white/10" align="end">
                    <CalendarComponent
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      className="pointer-events-auto bg-primary text-secondary"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Department Select */}
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger className="w-[200px] h-10 bg-white/5 border-white/10 text-secondary rounded-xl">
                  <SelectValue placeholder="Departamento" />
                </SelectTrigger>
                <SelectContent className="bg-primary border-white/10">
                  {departments.map((dept) => (
                    <SelectItem
                      key={dept.value}
                      value={dept.value}
                      className="text-secondary hover:bg-white/10 focus:bg-white/10 focus:text-secondary"
                    >
                      {dept.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* KPI Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Engagement Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-medium text-secondary">Taxa de Engajamento</h3>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="w-32 h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={engagementData}
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={50}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {engagementData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div>
                  <div className="text-5xl font-light text-secondary mb-2">75.5%</div>
                  <p className="text-secondary/60 text-sm">150 de 200 usuários ativos</p>
                  <div className="flex items-center gap-2 mt-2 text-green-400 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+5.2% este mês</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Storage Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <HardDrive className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-medium text-secondary">Armazenamento</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-5xl font-light text-secondary">45<span className="text-2xl text-secondary/60">GB</span></div>
                    <p className="text-secondary/60 text-sm">de 100GB utilizados</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-light text-secondary">45%</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Progress value={45} className="h-3 bg-white/10" />
                  <div className="flex justify-between text-xs text-secondary/50">
                    <span>Documentos: 28GB</span>
                    <span>Mídia: 12GB</span>
                    <span>Outros: 5GB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Social & Communication */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-medium text-secondary mb-6">Social & Comunicação</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-light text-secondary">1,248</div>
                    <p className="text-secondary/60 text-sm">Posts Publicados</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-light text-secondary">8,432</div>
                    <p className="text-secondary/60 text-sm">Curtidas</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <div className="text-3xl font-light text-secondary">2,156</div>
                    <p className="text-secondary/60 text-sm">Comentários</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Culture */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-medium text-secondary mb-6">Educação & Cultura</h3>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={lmsData}
                        cx="50%"
                        cy="50%"
                        innerRadius={28}
                        outerRadius={40}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {lmsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <span className="text-sm text-secondary/80">68% Conclusão</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-sm text-secondary/80">32% Abandono</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-secondary/60" />
                    <span className="text-secondary/80 text-sm">Cursos Disponíveis</span>
                  </div>
                  <span className="text-xl font-medium text-secondary">24</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-secondary/60" />
                    <span className="text-secondary/80 text-sm">Participação em Eventos</span>
                  </div>
                  <span className="text-xl font-medium text-secondary">82%</span>
                </div>
              </div>
            </div>

            {/* Gamification */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-medium text-secondary mb-6">Gamificação</h3>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 border-2 border-secondary/50 mb-4">
                  <div className="text-center">
                    <Trophy className="w-8 h-8 text-secondary mx-auto mb-1" />
                    <span className="text-xs text-secondary/60">NÍVEL</span>
                  </div>
                </div>
                
                <div className="text-4xl font-light text-secondary mb-1">4</div>
                <p className="text-secondary/60 text-sm">Nível Médio da Empresa</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-secondary/80 text-sm">XP Médio</span>
                    </div>
                    <span className="text-xl font-medium text-secondary">4,850</span>
                  </div>
                  <Progress value={72} className="h-2 bg-white/10" />
                  <p className="text-xs text-secondary/50 mt-2">72% para o próximo nível</p>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                  <span className="text-secondary/80 text-sm">Badges Coletivos</span>
                  <span className="text-xl font-medium text-secondary">156</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
