import { Image, Smile, FileText, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    id: 1,
    author: "Pedro Lima",
    role: "Product Designer",
    avatar: "PL",
    time: "Há 2 horas",
    content: "Acabamos de lançar a nova versão do Team Pulse! 🎉 Agora com IA diagnóstica em tempo real. Obrigado ao time de eng pela parceria!",
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    author: "Ana Costa",
    role: "People Lead",
    avatar: "AC",
    time: "Há 5 horas",
    content: "Lembrete: Nossa sessão de feedback 360º começa amanhã. Lembre-se: feedback é um presente, não uma crítica. 💝",
    likes: 18,
    comments: 5,
  },
  {
    id: 3,
    author: "Carlos Mendes",
    role: "Engineering Manager",
    avatar: "CM",
    time: "Ontem às 14:32",
    content: "O time de backend bateu a meta de sprint pela terceira vez consecutiva! 🚀 Muito orgulho dessa galera.",
    likes: 42,
    comments: 12,
  },
];

export const MainFeed = () => {
  return (
    <main className="flex-1 min-h-screen p-8">
      <div className="space-y-6 max-w-3xl mx-auto">
        {/* Post Creation Card */}
        <div className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-dark-fg font-semibold">
              VC
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="O que você gostaria de compartilhar?"
                className="w-full bg-transparent text-dark-fg placeholder:text-dark-fg/40 text-lg outline-none"
              />
              <div className="flex items-center gap-4 mt-4">
                <button className="flex items-center gap-2 text-dark-fg/60 hover:text-dark-fg transition-colors">
                  <Image className="w-5 h-5" />
                  <span className="text-sm">Imagem</span>
                </button>
                <button className="flex items-center gap-2 text-dark-fg/60 hover:text-dark-fg transition-colors">
                  <FileText className="w-5 h-5" />
                  <span className="text-sm">Arquivo</span>
                </button>
                <button className="flex items-center gap-2 text-dark-fg/60 hover:text-dark-fg transition-colors">
                  <Smile className="w-5 h-5" />
                  <span className="text-sm">Emoji</span>
                </button>
              </div>
            </div>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-glow-primary">
              Publicar
            </Button>
          </div>
        </div>

        {/* Posts Feed */}
        {posts.map((post) => (
          <article
            key={post.id}
            className="p-6 rounded-2xl bg-gradient-card backdrop-blur-xl border border-secondary/20 shadow-lg animate-fade-up hover:border-secondary/40 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-dark-fg font-semibold flex-shrink-0">
                {post.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-dark-fg font-bold">{post.author}</h3>
                    <p className="text-dark-fg/60 text-sm">{post.role}</p>
                  </div>
                  <span className="text-dark-fg/40 text-sm whitespace-nowrap">{post.time}</span>
                </div>
                <p className="text-dark-fg/80 mt-4 leading-relaxed">{post.content}</p>
                
                <div className="flex items-center gap-6 mt-6 pt-4 border-t border-secondary/10">
                  <button className="flex items-center gap-2 text-dark-fg/60 hover:text-dark-fg transition-colors group">
                    <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-dark-fg/60 hover:text-dark-fg transition-colors group">
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-dark-fg/60 hover:text-dark-fg transition-colors group ml-auto">
                    <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};
