function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-3 py-2 text-cyan-400 border-2 rounded-4xl pointer-events-auto hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_6px_6px_rgba(6,182,212,0.5)] hover:border-cyan-400 duration-500">
      {children}
    </button>
  );
}

export default Button;
