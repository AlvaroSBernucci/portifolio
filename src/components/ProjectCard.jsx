function ProjectCard({ name, techs, img, src }) {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer" className="block md:h-auto">
      <div className="bg-stone-950 p-4 rounded-2xl grid gap-5 md:gap-10 border-2 border-cyan-400 min-h-[400px] shadow-[0_0_2px_2px_rgba(6,182,212,0.5)] hover:shadow-[0_0_5px_5px_rgba(6,182,212,0.5)] duration-300 transition">
        <img src={img} alt={name} className="w-auto rounded-2xl" />
        <h3 className="text-sm md:text-3xl text-center">{name}</h3>
        <ul className="flex flex-wrap gap-3 justify-center">
          {techs.map((item, index) => (
            <li key={index} className="flex items-center">
              <p className="bg-stone-900 p-2 rounded-2xl text-sm border-2 border-cyan-400">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default ProjectCard;
