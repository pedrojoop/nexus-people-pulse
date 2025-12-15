import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, LogIn, UserPlus, Sparkles } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sem verificação - qualquer dado loga
    navigate("/platform");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-3xl" />
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        {/* Glassmorphic Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 border border-secondary/30 mb-4">
              <Sparkles className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="text-3xl font-light text-secondary tracking-wide mb-2">
              Nexus
            </h1>
            <p className="text-secondary/60 text-sm">
              {isLogin ? "Bem-vindo de volta" : "Crie sua conta"}
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex mb-8 p-1 bg-white/5 rounded-xl border border-white/10">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                isLogin
                  ? "bg-secondary text-primary shadow-lg"
                  : "text-secondary/60 hover:text-secondary"
              }`}
            >
              <LogIn className="w-4 h-4 inline-block mr-2" />
              Entrar
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                !isLogin
                  ? "bg-secondary text-primary shadow-lg"
                  : "text-secondary/60 hover:text-secondary"
              }`}
            >
              <UserPlus className="w-4 h-4 inline-block mr-2" />
              Registrar
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field - Only for Register */}
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-secondary/80 text-sm font-medium">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  className="h-12 bg-white/5 border-white/10 text-secondary placeholder:text-secondary/40 focus:border-secondary/50 focus:ring-secondary/20 rounded-xl"
                />
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-secondary/80 text-sm font-medium">
                E-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu@email.com"
                className="h-12 bg-white/5 border-white/10 text-secondary placeholder:text-secondary/40 focus:border-secondary/50 focus:ring-secondary/20 rounded-xl"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-secondary/80 text-sm font-medium">
                Senha
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="h-12 bg-white/5 border-white/10 text-secondary placeholder:text-secondary/40 focus:border-secondary/50 focus:ring-secondary/20 rounded-xl pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary/40 hover:text-secondary transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password - Only for Login */}
            {isLogin && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-secondary/60 hover:text-secondary transition-colors"
                >
                  Esqueceu a senha?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-secondary text-primary hover:bg-secondary/90 rounded-xl font-medium text-base shadow-lg shadow-secondary/20 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30"
            >
              {isLogin ? "Entrar" : "Criar Conta"}
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="px-4 text-secondary/40 text-sm">ou</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full h-12 flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl text-secondary/80 hover:bg-white/10 hover:text-secondary transition-all duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continuar com Google
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-secondary/40 text-sm mt-6">
          © 2024 Nexus. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Login;
