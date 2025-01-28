import { projetos } from "../constants";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="container p-4 pt-28 mx-auto items-center min-h-screen">
      <h2 className="text-6xl text-center pb-20">Projetos</h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 lg:gap-3 lg:gap-y-10 items-center">
        {projetos.map((item) => (
          <ProjectCard key={item.id} name={item.name} techs={item.techs} img={item.img} src={item.src} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
