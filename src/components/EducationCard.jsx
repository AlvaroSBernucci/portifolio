function EducationCard({ eduLvl, desc, index, year }) {
  return (
    <>
      <div
        className={`group relative bg-stone-950 p-6 rounded-4xl border-2 border-cyan-400 shadow-[0_0_10px_10px_rgba(6,182,212,0.5)] hover:shadow-[0_0_20px_20px_rgba(6,182,212,0.5)] duration-300 ${index % 2 === 0 ? "col-start-1" : "col-start-2"}`}>
        <div
          className={`grid grid-cols-2 absolute w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_10px_10px_rgba(6,182,212,0.5)] ${index % 2 === 0 ? "-right-13 -top-5" : "-left-13 -top-5"} group-hover:shadow-[0_0_15px_15px_rgba(6,182,212,0.5)]`}>
          {index % 2 !== 0 ? (
            <span className="ml-4 absolute right-8 -top-1 group-hover:text-cyan-500">{year}</span>
          ) : (
            <span className="ml-4 absolute -right-12 -top-1 group-hover:text-cyan-500">{year}</span>
          )}
        </div>
        <h3 className="text-3xl">{eduLvl}</h3>
        <p className="text-sm">{desc}</p>
      </div>
      <div></div>
    </>
  );
}

export default EducationCard;
