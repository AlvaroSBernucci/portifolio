import { technologies } from "../constants";
import TechnologiesCard from "./TechnologiesCard";

function Technologies() {
  return (
    <section id="technologies" className="container p-4 pt-28 mx-auto items-center min-h-screen">
      <h2 className="text-6xl text-center pb-20">Tecnologias</h2>
      <div className="flex flex-wrap gap-8 p-4 justify-center">
        {technologies.map((item) => (
          <TechnologiesCard key={item.id} name={item.name} type={item.type} Icon={item.Icon} />
        ))}
      </div>
    </section>
  );
}

export default Technologies;
