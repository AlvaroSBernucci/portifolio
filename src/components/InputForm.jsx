function InputForm({ name, label, type, value, onChange }) {
  return (
    <div className="grid items-start w-96">
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows="5"
          value={value}
          onChange={onChange}
          placeholder={label}
          className="border-2 border-cyan-400 p-4 rounded-2xl focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_5px_5px_rgba(6,182,212,0.5)]"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          className="border-2 border-cyan-400 p-4 rounded-2xl focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_5px_5px_rgba(6,182,212,0.5)]"
        />
      )}
    </div>
  );
}

export default InputForm;
