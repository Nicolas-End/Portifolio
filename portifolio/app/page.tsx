import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden cursor-default">
      <div className="absolute inset-0 bg-[url('/bg-hero.png')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(51 65 85 / 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <div className="grid lg:grid-cols-[350px_1fr] gap-8 lg:gap-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="inline-block">
                  <div className="size-16 rounded-full overflow-hidden shadow-lg shadow-cyan-500/20">
                    <Image
                      src="/me.jpg"
                      alt="Foto de Nicolas"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>

                <div>
                  <h1 className="text-5xl font-bold text-white mb-2 tracking-tight text-balance">Nicolas Silva</h1>
                  <p className="text-xl text-cyan-400 font-medium">Desenvolvedor Back-End</p>
                </div>

                <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                  Especializado em Java e Python, criando APIs robustas e escaláveis
                </p>
              </div>

              <nav>
                <ul className="space-y-1">
                  {[
                    { name: "Sobre Mim", icon: "👨‍💻" },
                    { name: "Projetos", icon: "🚀" },
                    { name: "Contato", icon: "💬" },
                  ].map((item) => (
                    <li key={item.name}>
                      <button
                        className="group w-full text-left px-4 py-3 rounded-xl
                                   transition-all duration-300 ease-out
                                   hover:bg-white/5 hover:pl-6
                                   relative overflow-hidden"
                      >
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-r-full group-hover:h-full transition-all duration-300" />

                        <span className="flex items-center gap-3">
                          <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {item.icon}
                          </span>
                          <span className="text-slate-300 group-hover:text-white font-medium transition-colors duration-300">
                            {item.name}
                          </span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="flex gap-3 pt-4">
                {["github", "linkedin", "email"].map((social) => (
                  <button
                    key={social}
                    className="size-10 rounded-lg bg-white/5 hover:bg-white/10 
                               flex items-center justify-center
                               transition-all duration-300 hover:scale-110
                               border border-white/10 hover:border-cyan-400/50"
                  >
                    <span className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                      {social === "github" && "GH"}
                      {social === "linkedin" && "IN"}
                      {social === "email" && "✉"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-3">Desenvolvedor Back-End Especializado</h2>
                    <p className="text-slate-300 leading-relaxed text-balance">
                      Desenvolvedor Back-End com foco em <span className="text-cyan-400 font-semibold">Java</span> e{" "}
                      <span className="text-cyan-400 font-semibold">Python</span>, criação de APIs Rest, integração de
                      serviços e modelagem de banco de dados. Sempre buscando evoluir tecnicamente e entregar soluções
                      eficientes.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Java", "Python", "Spring Boot", "REST API", "PostgreSQL", "MongoDB"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-cyan-400/10 text-cyan-300 text-sm font-medium border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 cursor-pointer">
                {[
                  { label: "Anos de Experiência", value: "2+", icon: "⏱️" },
                  { label: "Projetos Completos", value: "15+", icon: "✓" },
                  { label: "APIs Criadas", value: "6+", icon: "🔌" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 
                               hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
                <h3 className="text-xl font-bold text-white mb-6">Áreas de Expertise</h3>
                <div className="space-y-4">
                  {[
                    { title: "Desenvolvimento de APIs", desc: "REST APIs escaláveis e bem documentadas" },
                    { title: "Arquitetura de Sistemas", desc: "Design de soluções robustas e manuteníveis" },
                    { title: "Banco de Dados", desc: "Modelagem e otimização SQL e NoSQL" },
                  ].map((area, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="flex-shrink-0 size-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center border border-cyan-400/30">
                        <div className="size-2 rounded-full bg-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                          {area.title}
                        </h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{area.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
