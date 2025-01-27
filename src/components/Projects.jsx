import { projetos } from "../constants";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="Projects" className="container p-4 pt-28 mx-auto items-center min-h-screen">
      <h2 className="text-6xl text-center pb-20">Projetos</h2>
      <div className="grid grid-cols-3 gap-3 gap-y-10 items-center">
        {projetos.map((item) => (
          <ProjectCard name={item.name} techs={item.techs} img={item.img} src={item.src} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
