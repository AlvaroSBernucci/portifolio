function TechnologiesCard({ name, type, Icon }) {
  return (
    <div className="flex gap-4 border-2 bg-stone-900 border-cyan-400 shadow-[0_0_5px_5px_rgba(6,182,212,0.5)] p-4 w-2xs rounded-3xl hover:ease-in hover:scale-110 duration-300 hover:shadow-[0_0_8px_8px_rgba(6,182,212,0.5)]">
      <div className="p-2 bg-stone-800 rounded-2xl">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3>{name}</h3>
        <p className="text-sm text-stone-400">{type}</p>
      </div>
    </div>
  );
}

export default TechnologiesCard;
