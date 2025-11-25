import { useState } from "react";
import { PlatformHeader } from "@/components/platform/PlatformHeader";
import { LeftSidebar } from "@/components/platform/LeftSidebar";
import { RightSidebar } from "@/components/platform/RightSidebar";
import { Search, Send, Paperclip, Smile, MoreVertical, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const conversations = [
  {
    id: 1,
    name: "Ana Silva",
    lastMessage: "Ótimo! Vamos alinhar isso na segunda",
    time: "10:30",
    unread: 2,
    avatar: "/placeholder.svg",
    online: true,
  },
  {
    id: 2,
    name: "Time de Produto",
    lastMessage: "Carlos: Já atualizei o roadmap",
    time: "09:15",
    unread: 0,
    avatar: "/placeholder.svg",
    online: false,
  },
  {
    id: 3,
    name: "João Santos",
    lastMessage: "Perfeito, obrigado!",
    time: "Ontem",
    unread: 0,
    avatar: "/placeholder.svg",
    online: true,
  },
  {
    id: 4,
    name: "Design Team",
    lastMessage: "Maria: Aprovado o novo layout",
    time: "Ontem",
    unread: 0,
    avatar: "/placeholder.svg",
    online: false,
  },
];

const messages = [
  {
    id: 1,
    sender: "Ana Silva",
    content: "Oi! Conseguiu revisar o documento que enviei?",
    time: "10:25",
    isMine: false,
  },
  {
    id: 2,
    sender: "Você",
    content: "Sim! Ficou excelente. Apenas algumas sugestões pequenas nos últimos slides.",
    time: "10:27",
    isMine: true,
  },
  {
    id: 3,
    sender: "Ana Silva",
    content: "Ótimo! Vamos alinhar isso na segunda",
    time: "10:30",
    isMine: false,
  },
];

const Chat = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="min-h-screen bg-dark-bg">
      <PlatformHeader />
      <div className="flex justify-center">
        <div className="flex w-full max-w-[1600px]">
          <LeftSidebar />
          
          {/* Main Chat Area */}
          <main className="flex-1 min-h-[calc(100vh-4rem)] flex">
            {/* Conversations List */}
            <aside className="w-80 border-r border-secondary/10 bg-gradient-card/30 backdrop-blur-sm">
              {/* Search */}
              <div className="p-4 border-b border-secondary/10">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-fg/40" />
                  <Input
                    placeholder="Buscar conversas..."
                    className="pl-10 bg-dark-bg/50 border-secondary/20 text-dark-fg placeholder:text-dark-fg/40 focus-visible:ring-secondary/30"
                  />
                </div>
              </div>

              {/* Conversations */}
              <div className="overflow-y-auto h-[calc(100vh-12rem)]">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv)}
                    className={`w-full p-4 flex items-start gap-3 hover:bg-secondary/10 transition-all duration-300 border-b border-secondary/5 ${
                      selectedConversation.id === conv.id
                        ? "bg-secondary/20 border-l-2 border-l-secondary"
                        : ""
                    }`}
                  >
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={conv.avatar} />
                        <AvatarFallback className="bg-secondary/20 text-dark-fg">
                          {conv.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      {conv.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-dark-bg rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 text-left min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-dark-fg truncate">
                          {conv.name}
                        </h3>
                        <span className="text-xs text-dark-fg/50 ml-2">
                          {conv.time}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-dark-fg/60 truncate">
                          {conv.lastMessage}
                        </p>
                        {conv.unread > 0 && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-secondary text-dark-fg rounded-full">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            {/* Chat Messages */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="h-16 border-b border-secondary/10 flex items-center justify-between px-6 bg-gradient-card/30 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={selectedConversation.avatar} />
                    <AvatarFallback className="bg-secondary/20 text-dark-fg">
                      {selectedConversation.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold text-dark-fg">
                      {selectedConversation.name}
                    </h2>
                    <p className="text-xs text-dark-fg/50">
                      {selectedConversation.online ? "Online" : "Offline"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-secondary/20 text-dark-fg/70 hover:text-dark-fg"
                  >
                    <Phone className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-secondary/20 text-dark-fg/70 hover:text-dark-fg"
                  >
                    <Video className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-secondary/20 text-dark-fg/70 hover:text-dark-fg"
                  >
                    <MoreVertical className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isMine ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] ${
                        message.isMine
                          ? "bg-secondary/30 backdrop-blur-xl border border-secondary/40"
                          : "bg-gradient-card backdrop-blur-xl border border-secondary/20"
                      } rounded-2xl px-4 py-3 shadow-lg`}
                    >
                      {!message.isMine && (
                        <p className="text-xs font-semibold text-secondary mb-1">
                          {message.sender}
                        </p>
                      )}
                      <p className="text-dark-fg leading-relaxed">
                        {message.content}
                      </p>
                      <p className="text-xs text-dark-fg/40 mt-1">
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-secondary/10 bg-gradient-card/30 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-secondary/20 text-dark-fg/70 hover:text-dark-fg"
                  >
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Digite sua mensagem..."
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      className="pr-12 bg-dark-bg/50 border-secondary/20 text-dark-fg placeholder:text-dark-fg/40 focus-visible:ring-secondary/30"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-secondary/20 text-dark-fg/70 hover:text-dark-fg"
                    >
                      <Smile className="w-5 h-5" />
                    </Button>
                  </div>
                  <Button
                    className="bg-secondary hover:bg-secondary/80 text-dark-fg"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </main>

          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Chat;
