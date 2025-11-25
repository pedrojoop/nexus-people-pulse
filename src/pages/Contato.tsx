import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { NavBar } from "@/components/NavBar";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Nome é obrigatório" })
    .max(100, { message: "Nome deve ter menos de 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "Email deve ter menos de 255 caracteres" }),
  company: z.string()
    .trim()
    .min(1, { message: "Empresa é obrigatória" })
    .max(100, { message: "Empresa deve ter menos de 100 caracteres" }),
  message: z.string()
    .trim()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "Mensagem deve ter menos de 1000 caracteres" })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contato = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    // TODO: Implement email sending via edge function
    console.log("Form data:", data);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    reset();
  };

  return (
    <div className="min-h-screen bg-primary">
      <NavBar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column: Formulário de Contato */}
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8">
                Envie uma Mensagem
              </h1>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Nome */}
                <div>
                  <Label htmlFor="name" className="text-secondary mb-2 block">
                    Nome *
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="bg-primary/50 border-secondary/30 text-secondary placeholder:text-secondary/50 focus:border-secondary"
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-secondary mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="bg-primary/50 border-secondary/30 text-secondary placeholder:text-secondary/50 focus:border-secondary"
                    placeholder="seu.email@empresa.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Empresa */}
                <div>
                  <Label htmlFor="company" className="text-secondary mb-2 block">
                    Empresa *
                  </Label>
                  <Input
                    id="company"
                    {...register("company")}
                    className="bg-primary/50 border-secondary/30 text-secondary placeholder:text-secondary/50 focus:border-secondary"
                    placeholder="Nome da sua empresa"
                  />
                  {errors.company && (
                    <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>

                {/* Mensagem */}
                <div>
                  <Label htmlFor="message" className="text-secondary mb-2 block">
                    Mensagem *
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className="bg-primary/50 border-secondary/30 text-secondary placeholder:text-secondary/50 focus:border-secondary min-h-[150px]"
                    placeholder="Como podemos ajudar sua empresa?"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-secondary text-primary hover:bg-secondary/90 hover:shadow-glow-primary transition-all font-semibold text-lg py-6"
                >
                  Enviar
                </Button>
              </form>
            </div>

            {/* Right Column: Nossos Contatos */}
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8">
                Fale Diretamente Conosco
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Email</h3>
                      <a 
                        href="mailto:diretoria@nexuscommunity.com.br"
                        className="text-secondary/80 hover:text-secondary transition-all"
                      >
                        diretoria@nexuscommunity.com.br
                      </a>
                    </div>
                  </div>
                </div>

                {/* Localização */}
                <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Localização</h3>
                      <p className="text-secondary/80">
                        Trabalho Remoto Global
                      </p>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="bg-primary/80 backdrop-blur-sm rounded-2xl p-6 border border-secondary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">LinkedIn</h3>
                      <a 
                        href="https://linkedin.com/company/nexus"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary/80 hover:text-secondary transition-all"
                      >
                        linkedin.com/company/nexus
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-primary/80 backdrop-blur-sm rounded-2xl p-8 border border-secondary/20">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  Horário de Atendimento
                </h3>
                <p className="text-secondary/80 text-lg">
                  Segunda a Sexta: 9h às 18h (BRT)
                </p>
                <p className="text-secondary/70 mt-2">
                  Respondemos todas as mensagens em até 24 horas úteis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
