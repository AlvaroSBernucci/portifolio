function EducationCard({ eduLvl, desc, index, year }) {
  return (
    <>
      <div
        className={`group relative bg-stone-950 p-6 rounded-4xl border-2 border-cyan-400 shadow-[0_0_10px_10px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_20px_rgba(6,182,212,0.5)] duration-300 ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}`}>
        <div
          className={`grid grid-cols-2 absolute w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_10px_10px_rgba(6,182,212,0.5)] -top-10 -left-12  ${index % 2 === 0 ? "md:left-auto md:-right-13 md:-top-5" : "md:-left-13 md:-top-5"} group-hover:shadow-[0_0_15px_15px_rgba(6,182,212,0.5)]`}>
          {index % 2 !== 0 ? (
            <span className="ml-4 absolute -top-7 md:right-8 md:-top-1 group-hover:text-cyan-500">{year}</span>
          ) : (
            <span className="ml-4 absolute -top-7 md:-right-12 md:-top-1 group-hover:text-cyan-500">{year}</span>
          )}
        </div>
        <h3 className="text-xl mb-2 md:text-3xl">{eduLvl}</h3>
        <p className="text-xs md:text-sm">{desc}</p>
      </div>
      <div className="hidden md:block"></div>
    </>
  );
}

export default EducationCard;
