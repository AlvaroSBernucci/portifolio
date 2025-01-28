function MediaLinks({ id, href, Icon }) {
  return (
    <li>
      <a href={href}>
        <Icon className="w-12 h-12 p-2 border-2 rounded-2xl border-cyan-400 hover:ease-in hover:scale-125 duration-150 hover:shadow-[0_0_6px_6px_rgba(6,182,212,0.5)]" />
      </a>
    </li>
  );
}

export default MediaLinks;
