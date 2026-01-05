export default function AboutPage() {
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

      <div className="relative z-10 min-h-screen px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
              <span>Voltar</span>
            </a>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
              <div className="flex items-start gap-6 mb-8">
                <div className="size-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 flex-shrink-0">
                  <span className="text-3xl font-bold text-white">N</span>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">Sobre Mim</h1>
                  <p className="text-xl text-cyan-400">Nicolas Silva</p>
                </div>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  Olá! Sou um desenvolvedor Back-End Júnior apaixonado por tecnologia e por construir e desenvolver soluções 
                  reais. Tenho experiência com <span className="text-cyan-400 font-semibold">Java</span> e{" "}
                  <span className="text-cyan-400 font-semibold">Python</span>, e estou constantemente aprendendo e
                  aprimorando minhas habilidades na área, como exemplo desenvolvimento de Api RestFull mais escalaveis.
                </p>

                <p>
                  Minha jornada na programação começou com a curiosidade de entender como as aplicações funcionam nos
                  bastidores tentar desenvolver minha propria aplicação. Desde então, tenho me dedicado a estudar e aplicar boas práticas de desenvolvimento,
                  design patterns e arquitetura de software, sempre buscando crescer e evoluir como profissional.
                </p>

                <p>
                  Acredito que código limpo e bem estruturado é essencial para qualquer projeto de sucesso. Por isso,
                  busco sempre escrever código que seja não apenas funcional, mas também fácil de entender e manter.
                  Estou animado para enfrentar novos desafios e contribuir com equipes que valorizam qualidade e
                  inovação.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="size-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center border border-cyan-400/30">
                    💻
                  </span>
                  Tecnologias
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      category: "Backend",
                      techs: ["Java", "Python", "Spring Boot", "Django"],
                    },
                    {
                      category: "Database",
                      techs: ["PostgreSQL", "MongoDB", "MySQL"],
                    },
                    {
                      category: "DevOps & Tools",
                      techs: ["Docker", "Git", "Linux", "Postman"],
                    },
                    {
                      category: "API & Conceitos",
                      techs: ["REST", "JSON", "Swagger", "MVC"],
                    },
                  ].map((group, idx) => (
                    <div key={idx} className="space-y-2">
                      <h3 className="text-cyan-400 font-semibold text-sm">{group.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {group.techs.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-white/5 text-slate-300 text-sm border border-white/10 hover:bg-white/10 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="size-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center border border-cyan-400/30">
                    🎯
                  </span>
                  Aprendendo Atualmente
                </h2>

                <div className="space-y-4">
                  {[
                    {
                      title: "APIs RESTful",
                      desc: "Construção e consumo de APIs com boas práticas",
                      progress: 75,
                    },
                    {
                      title: "Banco de Dados",
                      desc: "SQL, modelagem e otimização de queries",
                      progress: 65,
                    },
                    {
                      title: "Clean Code",
                      desc: "Padrões de projeto e código limpo",
                      progress: 48,
                    },
                  ].map((focus, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-semibold">{focus.title}</h3>
                          <p className="text-slate-400 text-sm">{focus.desc}</p>
                        </div>
                        <span className="text-cyan-400 font-semibold text-sm">{focus.progress}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${focus.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="size-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center border border-cyan-400/30">
                  🎓
                </span>
                Formação Acadêmica
              </h2>

              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-cyan-400/30">
                  <div className="absolute left-0 top-0 -translate-x-1/2 size-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="px-2 py-1 rounded bg-cyan-400/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                        2026 - 2030
                      </span>
                      <h3 className="text-white font-bold text-lg">Graduação</h3>
                    </div>

                    <p className="text-cyan-400 font-medium">UNIFAJ - Centro Universitário de Jaguariúna</p>

                    <p className="text-slate-300 text-sm mt-3">
                      Cursando Bacharelado em Ciência da Computação, focado em desenvolvimento de software, algoritmos
                      avançados e arquitetura de sistemas.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-cyan-400/30">
                  <div className="absolute left-0 top-0 -translate-x-1/2 size-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="px-2 py-1 rounded bg-cyan-400/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                        2023 - 2025
                      </span>
                      <h3 className="text-white font-bold text-lg">Ensino Técnico</h3>
                    </div>

                    <p className="text-cyan-400 font-medium">Etec Pedro Ferreira Alves</p>

                    <p className="text-slate-300 text-sm mt-3">
                      Técnico em Análise e Desenvolvimento de Sistemas, com foco em programação back-end, banco de dados
                      e desenvolvimento de APIs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="size-10 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center border border-cyan-400/30">
                  🚀
                </span>
                Minha Jornada
              </h2>

              <div className="space-y-6">
                {[
                  {
                    year: "2025",
                    title: "Desenvolvedor Back-End Júnior",
                    company: "Finalização da Formação e Início da Carreira",
                    achievements: [
                      "Desenvolvi APIs REST completas utilizando Java e Spring Boot",
                      "Implementei autenticação JWT e segurança em aplicações",
                      "Trabalhei com bancos de dados PostgreSQL e MongoDB",
                      "Aprendi Docker para containerização de aplicações",
                      "Desenvolvi meu TCC e finalizei a formação técnica",
                    ],
                  },
                  {
                    year: "2024",
                    title: "Aplicação e Fortalecimento de Conhecimentos",
                    company: "Livros e desenvolvimento de projetos",
                    achievements: [
                      "Comecei a ler livros sobre Clean Code e Design Patterns",
                      "Construí projetos práticos para consolidar o aprendizado",
                      "Aprendi sobre Git, GitHub e versionamento de código",
                      "Estudei conceitos de POO, SOLID e design patterns",
                    ],
                  },
                  {
                    year: "2023",
                    title: "ETEC - Técnico em Analise e Desenvolvimento de Sistemas",
                    company: "Incio da Formação Técnica",
                    achievements: [
                      "Primeiros sobre fundamentos de programação",
                      "Descobri paixão pelo desenvolvimento back-end",
                      "Aprendi fundamentos de bancos de dados e SQL",
                      "Desenvolvi meu pequeno projeto para apresentacão da escola, mal estruturado, mas me senti muito feliz ao ver funcionando",
                    ],
                    
                  },
                  {
                    year: "2022",
                    title: "Início da Jornada",
                    company: "inicio por autodidatismo",
                    achievements: [
                      "Primeiros passos com programação e lógica",
                      "Desenvolvia pequenos scripts para automatizar tarefas",
                      "Desenvolvi interesse por desenvolvimento de software",
                    ],
                    
                  },
                ].map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-cyan-400/30">
                    <div className="absolute left-0 top-0 -translate-x-1/2 size-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-2 py-1 rounded bg-cyan-400/20 text-cyan-300 text-xs font-bold border border-cyan-400/30">
                          {exp.year}
                        </span>
                        <h3 className="text-white font-bold text-lg">{exp.title}</h3>
                      </div>

                      <p className="text-cyan-400 font-medium">{exp.company}</p>

                      <ul className="space-y-2 mt-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-slate-300 text-sm flex gap-2">
                            <span className="text-cyan-400 flex-shrink-0">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "📚",
                  title: "Aprendizado Constante",
                  desc: "Sempre buscando evoluir e aprender novas tecnologias e conceitos",
                },
                {
                  icon: "💪",
                  title: "Determinação",
                  desc: "Dedicado a superar desafios e crescer como desenvolvedor",
                },
                {
                  icon: "🎯",
                  title: "Foco em Qualidade",
                  desc: "Comprometido em escrever código limpo e seguir boas práticas",
                },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 text-center"
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className="text-white font-bold mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Vamos Conectar?</h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Estou em busca de oportunidades para crescer como desenvolvedor e contribuir com projetos incríveis. Se
                você tem uma vaga ou quer trocar experiências sobre tecnologia, ficarei feliz em conversar!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="/contato"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  Entrar em Contato
                </a>
                <a
                  href="/projetos"
                  className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Ver Projetos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
