import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { RightSidebar } from "@/components/platform/RightSidebar";
import { Folder, FileText, FileImage, File, Download, Trash2, MoreVertical, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const documentos = [
  {
    id: 1,
    type: "folder",
    name: "Relatórios Q4 2024",
    items: 24,
  },
  {
    id: 2,
    type: "folder",
    name: "Apresentações",
    items: 15,
  },
  {
    id: 3,
    type: "folder",
    name: "Políticas & Processos",
    items: 8,
  },
  {
    id: 4,
    type: "pdf",
    name: "Plano Estratégico 2025.pdf",
    size: "2.4 MB",
  },
  {
    id: 5,
    type: "doc",
    name: "Manual de Onboarding.docx",
    size: "1.8 MB",
  },
  {
    id: 6,
    type: "image",
    name: "Logo_Nexus_2024.png",
    size: "456 KB",
  },
  {
    id: 7,
    type: "pdf",
    name: "Contrato_Fornecedor_ABC.pdf",
    size: "3.2 MB",
  },
  {
    id: 8,
    type: "doc",
    name: "Ata_Reunião_21Nov.docx",
    size: "892 KB",
  },
];

const getFileIcon = (type: string) => {
  switch (type) {
    case "folder":
      return Folder;
    case "pdf":
    case "doc":
      return FileText;
    case "image":
      return FileImage;
    default:
      return File;
  }
};

const Documentos = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <PlatformHeader />
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1600px]">
          <LeftSidebar />
          
          <main className="flex-1 min-h-[calc(100vh-4rem)] p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold text-dark-fg">Gestão de Documentos</h1>
              <Button className="bg-secondary hover:bg-secondary/80 text-dark-fg gap-2">
                <Plus className="w-5 h-5" />
                Nova Pasta
              </Button>
            </div>

            {/* Documents Grid */}
            {documentos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {documentos.map((item) => {
                  const Icon = getFileIcon(item.type);
                  const isFolder = item.type === "folder";
                  
                  return (
                    <div
                      key={item.id}
                      className="group bg-gradient-card backdrop-blur-xl border border-secondary/20 rounded-2xl p-6 shadow-glow-subtle hover:shadow-glow-primary transition-all duration-300 hover:border-secondary/40 cursor-pointer"
                    >
                      <div className="flex flex-col items-center text-center">
                        {/* Icon */}
                        <div className={`w-20 h-20 flex items-center justify-center rounded-xl mb-4 ${
                          isFolder 
                            ? "bg-secondary/20 border border-secondary/30" 
                            : "bg-dark-bg/50 border border-secondary/20"
                        }`}>
                          <Icon className={`w-10 h-10 ${
                            isFolder ? "text-secondary" : "text-dark-fg/60"
                          }`} />
                        </div>

                        {/* Name */}
                        <h3 className="text-dark-fg font-semibold mb-2 line-clamp-2 min-h-[3rem]">
                          {item.name}
                        </h3>

                        {/* Metadata */}
                        <p className="text-sm text-dark-fg/50 mb-4">
                          {isFolder 
                            ? `${item.items} itens` 
                            : item.size
                          }
                        </p>

                        {/* Actions */}
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-secondary/20 text-dark-fg/70 hover:text-dark-fg"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive text-dark-fg/70"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 hover:bg-secondary/20 text-dark-fg/70 hover:text-dark-fg"
                              >
                                <MoreVertical className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-dark-bg border-secondary/20">
                              <DropdownMenuItem className="text-dark-fg hover:bg-secondary/20 cursor-pointer">
                                Renomear
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-dark-fg hover:bg-secondary/20 cursor-pointer">
                                Mover
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-dark-fg hover:bg-secondary/20 cursor-pointer">
                                Compartilhar
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-dark-fg hover:bg-secondary/20 cursor-pointer">
                                Ver detalhes
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Empty State */
              <div className="flex items-center justify-center min-h-[60vh]">
                <div className="bg-gradient-card backdrop-blur-xl border border-secondary/20 rounded-2xl p-12 max-w-md text-center shadow-glow-subtle">
                  <div className="w-24 h-24 mx-auto mb-6 bg-secondary/20 border border-secondary/30 rounded-xl flex items-center justify-center">
                    <Folder className="w-12 h-12 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-fg mb-3">
                    Nenhum documento encontrado
                  </h3>
                  <p className="text-dark-fg/60 leading-relaxed">
                    Crie uma pasta ou adicione um arquivo para começar.
                  </p>
                </div>
              </div>
            )}
          </main>

          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Documentos;
