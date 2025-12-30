import { GithubApiPublicRepo } from "@/lib/service/githubApi";
import { getAllMyPublicRepos } from "@/lib/service/githubApi";
import Projects from "./Projetos";

export default async function ProjectsPage() {
  const projects = await getAllMyPublicRepos();

  return <Projects projects={projects} />;
}
  

