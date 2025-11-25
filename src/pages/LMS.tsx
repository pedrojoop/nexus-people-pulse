import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { Users, CheckCircle, XCircle, BookOpen, AlertTriangle, Eye, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Total de Alunos", value: "347", icon: Users },
  { label: "Taxa de Conclusão Média", value: "68%", icon: CheckCircle },
  { label: "Taxa de Abandono Média", value: "24%", icon: XCircle, isNegative: true },
  { label: "Cursos Ativos", value: "12", icon: BookOpen },
];

const courses = [
  {
    id: 1,
    title: "Liderança Transformadora",
    students: 84,
    completion: 72,
    dropout: 18,
    avgProgress: 65,
    status: "normal",
    category: "Liderança"
  },
  {
    id: 2,
    title: "Comunicação Não-Violenta",
    students: 156,
    completion: 88,
    dropout: 8,
    avgProgress: 82,
    status: "normal",
    category: "Soft Skills"
  },
  {
    id: 3,
    title: "Gestão de Projetos Ágeis",
    students: 62,
    completion: 45,
    dropout: 38,
    avgProgress: 42,
    status: "atencao",
    category: "Metodologias"
  },
  {
    id: 4,
    title: "Inteligência Emocional",
    students: 124,
    completion: 78,
    dropout: 15,
    avgProgress: 71,
    status: "normal",
    category: "Desenvolvimento Pessoal"
  },
  {
    id: 5,
    title: "Feedback e Performance",
    students: 98,
    completion: 55,
    dropout: 32,
    avgProgress: 48,
    status: "atencao",
    category: "Gestão de Pessoas"
  },
  {
    id: 6,
    title: "Cultura de Inovação",
    students: 203,
    completion: 91,
    dropout: 6,
    avgProgress: 89,
    status: "normal",
    category: "Inovação"
  },
];

const tabs = ["Visão Geral", "Criar Curso", "Relatórios", "Configurações"];

const LMS = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <PlatformHeader />
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1600px]">
          <LeftSidebar />
          
          <main className="flex-1 min-h-screen p-8 pt-6">
            <div className="space-y-6 max-w-7xl mx-auto">
              {/* Page Header */}
              <div>
                <h1 className="text-4xl font-bold text-dark-fg mb-6">Treinamentos (LMS)</h1>
                
                {/* Navigation Tabs */}
                <div className="flex gap-6 border-b border-secondary/20 mb-6">
                  {tabs.map((tab, idx) => (
                    <button
                      key={tab}
                      className={`pb-3 px-2 text-sm font-medium transition-all duration-300 ${
                        idx === 0
                          ? "text-secondary border-b-2 border-secondary"
                          : "text-dark-fg/60 hover:text-dark-fg/80"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Top Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <stat.icon className={`w-5 h-5 ${stat.isNegative ? 'text-red-400' : 'text-secondary'}`} />
                    </div>
                    <p className={`text-4xl font-bold mb-2 ${stat.isNegative ? 'text-red-400' : 'text-dark-fg'}`}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-dark-fg/60">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Alert Section */}
              <article
                className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border-2 border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-[1.01]"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold border bg-red-500/20 text-red-300 border-red-500/30">
                    Alta Prioridade
                  </span>
                  <span className="text-xs text-dark-fg/60">Há 3 horas</span>
                </div>

                {/* Main Alert */}
                <h2 className="text-2xl font-bold text-dark-fg mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  Alta Taxa de Abandono Detectada
                </h2>
                <p className="text-dark-fg/80 leading-relaxed mb-4">
                  Os cursos "Gestão de Projetos Ágeis" e "Feedback e Performance" apresentam taxas de abandono acima de 30%. 
                  Recomendamos revisar o conteúdo, a carga horária e o formato de entrega desses treinamentos.
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow-primary transition-all duration-300 hover:scale-105">
                    <Eye className="w-4 h-4" />
                    Analisar Cursos
                  </Button>
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow-primary transition-all duration-300 hover:scale-105">
                    <TrendingDown className="w-4 h-4" />
                    Ver Relatório Completo
                  </Button>
                </div>
              </article>

              {/* Cursos Disponíveis Section */}
              <div>
                <h2 className="text-2xl font-bold text-dark-fg mb-4">Cursos Disponíveis</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <article
                      key={course.id}
                      className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg hover:shadow-glow-primary hover:border-secondary/40 transition-all duration-300 group"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-dark-fg group-hover:text-secondary transition-colors mb-1">
                            {course.title}
                          </h3>
                          <p className="text-xs text-dark-fg/50">{course.category}</p>
                        </div>
                        {course.status === "atencao" && (
                          <Badge className="text-xs px-2 py-0.5 border bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                            Atenção
                          </Badge>
                        )}
                      </div>

                      {/* Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-dark-fg/60">Alunos</span>
                          <span className="text-sm text-dark-fg font-medium">{course.students}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-dark-fg/60">Taxa de Conclusão</span>
                          <span className="text-sm text-dark-fg font-medium">{course.completion}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-dark-fg/60">Taxa de Abandono</span>
                          <span className={`text-sm font-medium ${course.dropout > 30 ? 'text-red-400' : 'text-dark-fg'}`}>
                            {course.dropout}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-dark-fg/70">Progresso Médio</span>
                          <span className="text-secondary font-semibold">{course.avgProgress}%</span>
                        </div>
                        <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary/10">
                          <div 
                            className="h-full bg-gradient-beige transition-all duration-500 rounded-full"
                            style={{ 
                              width: `${course.avgProgress}%`,
                              boxShadow: '0 0 12px hsl(var(--secondary) / 0.5)'
                            }}
                          />
                        </div>
                      </div>

                      {/* Action */}
                      <button className="w-full text-center text-sm text-secondary hover:text-secondary/80 transition-colors font-medium pt-4 border-t border-secondary/10">
                        Gerenciar Curso
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default LMS;
