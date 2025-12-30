"use client"
import type { GithubApiPublicRepo } from "@/lib/service/githubApi"

interface Props {
  projects: GithubApiPublicRepo[]
}

export default function Projects({ projects }: Props) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/bg-hero.png')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(51 65 85 / 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20">
              <div className="size-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Portfolio</span>
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight text-balance">
                Projetos Realizados
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                Projetos desenvolvidos com foco em soluções back-end, aplicando boas práticas, integração com bancos de dados e APIs, sempre buscando código limpo e escalável
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl">📦</div>
                <div>
                  <div className="text-2xl font-bold text-white">{projects?.length || "0"}</div>
                  <div className="text-sm text-slate-400">Total de Projetos</div>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl">⭐</div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {projects?.reduce((acc, p) => acc + (p.stargazers_count || 0), 0) || 0}
                  </div>
                  <div className="text-sm text-slate-400">Stars Totais</div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          {projects && projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <article
                  key={idx}
                  className="group rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 
                           hover:bg-white/10 hover:border-cyan-400/30
                           transition-all duration-300 hover:scale-[1.02]
                           overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10
                           flex flex-col"
                >
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Project Title and Description */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors text-balance leading-tight">
                        {project.name}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                        {project.description || "Sem descrição disponível"}
                      </p>
                    </div>

                    {/* Language Badge */}
                    {project.language && (
                      <div className="mb-4">
                        <span
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400/10 to-blue-500/10 
                                       text-cyan-400 text-xs font-medium border border-cyan-400/20"
                        >
                          <span className="size-2 rounded-full bg-cyan-400" />
                          {project.language}
                        </span>
                      </div>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                      {project.stargazers_count !== undefined && (
                        <div className="flex items-center gap-1.5">
                          <span>⭐</span>
                          <span className="font-medium">{project.stargazers_count}</span>
                        </div>
                      )}
                      {project.forks_count !== undefined && (
                        <div className="flex items-center gap-1.5">
                          <span>🔱</span>
                          <span className="font-medium">{project.forks_count}</span>
                        </div>
                      )}
                      {project.open_issues_count !== undefined && (
                        <div className="flex items-center gap-1.5">
                          <span>⚠️</span>
                          <span className="font-medium">{project.open_issues_count}</span>
                        </div>
                      )}
                    </div>

                    {/* Spacer to push footer to bottom */}
                    <div className="flex-1" />

                    {/* Footer with date and action */}
                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 flex items-center gap-1.5">
                          <span>📅</span>
                          {new Date(project.created_at).toLocaleDateString("pt-BR", {
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        {project.updated_at && (
                          <span className="text-slate-500 flex items-center gap-1.5">
                            <span>🔄</span>
                            {new Date(project.updated_at).toLocaleDateString("pt-BR", {
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        )}
                      </div>

                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2.5 rounded-lg
                                 bg-gradient-to-r from-cyan-400/0 to-blue-500/0
                                 group-hover:from-cyan-400/10 group-hover:to-blue-500/10
                                 border border-transparent group-hover:border-cyan-400/30
                                 text-slate-400 group-hover:text-cyan-400
                                 font-medium text-sm text-center
                                 transition-all duration-300
                                 flex items-center justify-center gap-2"
                      >
                        <span>Ver no GitHub</span>
                        <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center size-16 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <p className="text-slate-400 text-lg">Nenhum projeto encontrado.</p>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="inline-block rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 p-8 max-w-2xl mx-auto hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-3xl">💼</span>
                <h3 className="text-2xl font-bold text-white">Interessado em trabalhar juntos?</h3>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Estou sempre aberto a novos desafios e oportunidades de colaboração em projetos interessantes
              </p>
              <a
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 
                         text-white font-semibold
                         hover:shadow-lg hover:shadow-cyan-500/50
                         transition-all duration-300 hover:scale-105"
              >
                <span>Entre em Contato</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Back to Home */}
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
    </main>
  )
}
