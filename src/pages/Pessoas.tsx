import { useState } from "react";
import { Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { PlatformHeader } from "@/components/platform/PlatformHeader";

// Mock data for team members
const teamMembers = [
  {
    id: 1,
    name: "Pedro Lima",
    role: "Super Admin",
    avatar: "",
    initials: "PL",
    skills: ["Liderança", "Estratégia", "Gestão"],
  },
  {
    id: 2,
    name: "Larissa Mendes",
    role: "Gerente de RH",
    avatar: "",
    initials: "LM",
    skills: ["Recrutamento", "Cultura", "Desenvolvimento"],
  },
  {
    id: 3,
    name: "Carlos Silva",
    role: "Desenvolvedor Senior",
    avatar: "",
    initials: "CS",
    skills: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 4,
    name: "Ana Costa",
    role: "Designer UX/UI",
    avatar: "",
    initials: "AC",
    skills: ["Figma", "Design System", "Pesquisa"],
  },
  {
    id: 5,
    name: "Roberto Santos",
    role: "Analista de Dados",
    avatar: "",
    initials: "RS",
    skills: ["Python", "SQL", "Analytics"],
  },
  {
    id: 6,
    name: "Marina Oliveira",
    role: "Marketing Manager",
    avatar: "",
    initials: "MO",
    skills: ["Branding", "Conteúdo", "Social Media"],
  },
];

export default function Pessoas() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex w-full bg-[hsl(var(--dark-bg))]">
      <LeftSidebar />

      <div className="flex-1 flex flex-col">
        <PlatformHeader />

        <main className="flex-1 p-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-[hsl(var(--dark-fg))] mb-2">
                  Nosso Time
                </h1>
                <p className="text-[hsl(var(--dark-fg))]/70">
                  Conheça as pessoas que fazem a diferença
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-[hsl(var(--secondary))]" />
                <span className="text-[hsl(var(--dark-fg))] font-medium">
                  {filteredMembers.length} membros
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[hsl(var(--secondary))]/60" />
              <Input
                type="text"
                placeholder="Buscar por nome ou cargo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[hsl(var(--dark-bg))]/50 border-[hsl(var(--secondary))]/30 text-[hsl(var(--dark-fg))] placeholder:text-[hsl(var(--dark-fg))]/50 focus:border-[hsl(var(--secondary))]"
              />
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gradient-to-br from-[hsl(var(--dark-bg))]/50 to-[hsl(var(--dark-bg))]/30 backdrop-blur-sm border border-[hsl(var(--secondary))]/20 rounded-lg p-6 hover:border-[hsl(var(--secondary))]/40 transition-all duration-300 hover:shadow-[var(--glow-primary)]"
              >
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <Avatar className="h-20 w-20 border-2 border-[hsl(var(--secondary))]/30">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-[hsl(var(--secondary))]/20 text-[hsl(var(--secondary))] text-xl font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Name and Role */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-[hsl(var(--dark-fg))] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[hsl(var(--dark-fg))]/60">
                    {member.role}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs border-[hsl(var(--secondary))]/30 text-[hsl(var(--dark-fg))]/70 bg-transparent"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  variant="ghost"
                  className="w-full border border-[hsl(var(--secondary))]/40 text-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary))]/10 hover:border-[hsl(var(--secondary))]/60"
                >
                  Conversar
                </Button>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredMembers.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="bg-gradient-to-br from-[hsl(var(--dark-bg))]/50 to-[hsl(var(--dark-bg))]/30 backdrop-blur-sm border border-[hsl(var(--secondary))]/20 rounded-lg p-12 text-center max-w-md">
                <Users className="h-16 w-16 text-[hsl(var(--secondary))]/40 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[hsl(var(--dark-fg))] mb-2">
                  Nenhuma pessoa encontrada
                </h3>
                <p className="text-[hsl(var(--dark-fg))]/60">
                  Tente ajustar sua busca para encontrar o que procura.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
