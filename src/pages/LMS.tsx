import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { RightSidebar } from "@/components/platform/RightSidebar";
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const meusCursos = [
  {
    id: 1,
    title: "Liderança e Gestão de Equipes",
    difficulty: "Intermediário",
    progress: 68,
    duration: "8 horas",
    icon: "👥",
  },
  {
    id: 2,
    title: "Comunicação Não-Violenta",
    difficulty: "Iniciante",
    progress: 92,
    duration: "4 horas",
    icon: "💬",
  },
  {
    id: 3,
    title: "Gestão de Projetos Ágeis",
    difficulty: "Avançado",
    progress: 34,
    duration: "12 horas",
    icon: "🎯",
  },
];

const cursosDisponiveis = [
  {
    id: 4,
    title: "Inteligência Emocional no Trabalho",
    difficulty: "Iniciante",
    duration: "6 horas",
    icon: "🧠",
    students: 124,
  },
  {
    id: 5,
    title: "Feedback e Performance",
    difficulty: "Intermediário",
    duration: "5 horas",
    icon: "📊",
    students: 98,
  },
  {
    id: 6,
    title: "Cultura de Inovação",
    difficulty: "Intermediário",
    duration: "7 horas",
    icon: "💡",
    students: 203,
  },
  {
    id: 7,
    title: "Design Thinking na Prática",
    difficulty: "Avançado",
    duration: "10 horas",
    icon: "🎨",
    students: 87,
  },
  {
    id: 8,
    title: "Resolução de Conflitos",
    difficulty: "Iniciante",
    duration: "4 horas",
    icon: "🤝",
    students: 156,
  },
  {
    id: 9,
    title: "Produtividade e Gestão de Tempo",
    difficulty: "Iniciante",
    duration: "5 horas",
    icon: "⏰",
    students: 189,
  },
];

const LMS = () => {
  const [activeTab, setActiveTab] = useState<"meus" | "disponiveis">("meus");

  return (
    <div className="min-h-screen bg-dark-bg">
      <PlatformHeader />
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1600px]">
          <LeftSidebar />
          
          <main className="flex-1 min-h-[calc(100vh-4rem)] p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-dark-fg mb-6">
                Treinamento e Desenvolvimento
              </h1>

              {/* Tabs */}
              <div className="flex gap-6 border-b border-secondary/20">
                <button
                  onClick={() => setActiveTab("meus")}
                  className={`pb-3 px-2 text-sm font-medium transition-all duration-300 ${
                    activeTab === "meus"
                      ? "text-secondary border-b-2 border-secondary"
                      : "text-dark-fg/60 hover:text-dark-fg/80"
                  }`}
                >
                  Meus Cursos
                </button>
                <button
                  onClick={() => setActiveTab("disponiveis")}
                  className={`pb-3 px-2 text-sm font-medium transition-all duration-300 ${
                    activeTab === "disponiveis"
                      ? "text-secondary border-b-2 border-secondary"
                      : "text-dark-fg/60 hover:text-dark-fg/80"
                  }`}
                >
                  Cursos Disponíveis
                </button>
              </div>
            </div>

            {/* Meus Cursos */}
            {activeTab === "meus" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {meusCursos.map((curso) => (
                  <div
                    key={curso.id}
                    className="bg-gradient-card backdrop-blur-xl border border-secondary/20 rounded-2xl p-6 shadow-glow-subtle hover:shadow-glow-primary transition-all duration-300 hover:border-secondary/40 group"
                  >
                    {/* Icon */}
                    <div className="w-20 h-20 bg-secondary/20 border border-secondary/30 rounded-xl flex items-center justify-center mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                      {curso.icon}
                    </div>

                    {/* Title & Difficulty */}
                    <h3 className="text-xl font-semibold text-dark-fg mb-3 leading-tight">
                      {curso.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-secondary/30 text-dark-fg border-secondary/40 text-xs font-medium px-3 py-1">
                        {curso.difficulty}
                      </Badge>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-dark-fg/60 text-sm mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{curso.duration}</span>
                    </div>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-dark-fg/70">Progresso</span>
                        <span className="text-secondary font-semibold">
                          {curso.progress}%
                        </span>
                      </div>
                      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-secondary/10">
                        <div
                          className="h-full bg-gradient-beige transition-all duration-500 rounded-full"
                          style={{
                            width: `${curso.progress}%`,
                            boxShadow: "0 0 8px hsl(var(--secondary) / 0.5)",
                          }}
                        />
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full bg-secondary hover:bg-secondary/80 text-dark-fg font-semibold shadow-glow-primary">
                      Continuar Curso
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* Cursos Disponíveis */}
            {activeTab === "disponiveis" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cursosDisponiveis.map((curso) => (
                  <div
                    key={curso.id}
                    className="bg-gradient-card backdrop-blur-xl border border-secondary/20 rounded-2xl p-6 shadow-glow-subtle hover:shadow-glow-primary transition-all duration-300 hover:border-secondary/40 group"
                  >
                    {/* Icon */}
                    <div className="w-20 h-20 bg-secondary/20 border border-secondary/30 rounded-xl flex items-center justify-center mb-4 text-4xl group-hover:scale-110 transition-transform duration-300">
                      {curso.icon}
                    </div>

                    {/* Title & Difficulty */}
                    <h3 className="text-xl font-semibold text-dark-fg mb-3 leading-tight">
                      {curso.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className="bg-secondary/30 text-dark-fg border-secondary/40 text-xs font-medium px-3 py-1">
                        {curso.difficulty}
                      </Badge>
                    </div>

                    {/* Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-dark-fg/60 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{curso.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-dark-fg/60 text-sm">
                        <Award className="w-4 h-4" />
                        <span>{curso.students} alunos inscritos</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      className="w-full border-secondary/40 text-dark-fg hover:bg-secondary/20 hover:border-secondary/60 font-semibold"
                    >
                      Inscrever-se
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </main>

          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default LMS;
