function MediaLinks({ id, href, Icon }) {
  return (
    <li key={id}>
      <a href={href}>
        <Icon className="w-12 h-12 p-2 border-2 rounded-full border-cyan-400" />
      </a>
    </li>
  );
}

export default MediaLinks;
