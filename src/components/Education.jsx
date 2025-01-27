import { educationOrgs } from "../constants";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <section id="education" className="container p-4 pt-28 mx-auto items-center min-h-screen">
      <h2 className="text-6xl text-center pb-20">Education</h2>
      <div className="relative grid grid-cols-2 gap-20 p-8">
        {educationOrgs.map((item, index) => (
          <EducationCard key={item.id} eduLvl={item.eduLvl} desc={item.desc} index={index} year={item.year} />
        ))}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-cyan-400 shadow-[0_0_5px_5px_rgba(6,182,212,0.5)]"></div>
      </div>
    </section>
  );
}

export default Education;
