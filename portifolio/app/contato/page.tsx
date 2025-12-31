import { Mail, MapPin, Phone, Github, Linkedin, MessageSquare } from "lucide-react"

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg-hero.png')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(51 65 85 / 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="size-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <MessageSquare className="text-white" size={32} />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight text-balance">Entre em Contato</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto text-balance">
              Conecte-se comigo através dos canais abaixo. Estou sempre aberto a novos projetos e oportunidades!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 size-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center border border-cyan-400/30">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Email</div>
                    <a
                      href="mailto:nicolasvalsi203@gmail.com"
                      className="text-white group-hover:text-cyan-400 transition-colors font-medium"
                    >
                      nicolasvalsi203@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 size-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center border border-cyan-400/30">
                    <Phone className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Telefone</div>
                    <a
                      href="tel:+5511992122575"
                      className="text-white group-hover:text-cyan-400 transition-colors font-medium"
                    >
                      +55 (19) 99212-2575
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 size-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center border border-cyan-400/30">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400 mb-1">Localização</div>
                    <div className="text-white font-medium">São Paulo, Brasil</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Redes Sociais</h3>

              <div className="space-y-3">
                <a
                  href="https://github.com/Nicolas-End "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-4 py-3 rounded-xl bg-white/5 border border-white/10
                             hover:bg-white/10 hover:border-cyan-400/50 hover:pl-6
                             transition-all duration-300 group"
                >
                  <Github className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={24} />
                  <div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">GitHub</div>
                    <div className="text-sm text-slate-400">@Nicolas-End</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/nicolas-silva-4094352b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-4 py-3 rounded-xl bg-white/5 border border-white/10
                             hover:bg-white/10 hover:border-cyan-400/50 hover:pl-6
                             transition-all duration-300 group"
                >
                  <Linkedin className="text-slate-400 group-hover:text-cyan-400 transition-colors" size={24} />
                  <div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">LinkedIn</div>
                    <div className="text-sm text-slate-400">Nicolas Silva</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 backdrop-blur-xl border border-cyan-400/20 p-8 shadow-2xl text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Disponibilidade</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Atualmente disponível para novos trabalhos. Entre em contato
                através de qualquer um dos canais acima!
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="size-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-medium">Disponível para trabalho</span>
              </div>
              
            </div>
            <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 
                       transition-colors duration-300 font-medium group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>Voltar para Home</span>
            </a>
          </div>
          </div>
        </div>
      </div>
    </main>
  )
}
