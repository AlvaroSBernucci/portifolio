import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="flex justify-between items-center bg-stone-950 text-gray-50 p-8 font-bold fixed top-0 left-0 right-0 z-10">
      <h2 className="text-2xl">
        Alvaro{" "}
        <span className="text-cyan-200 relative after:content-[''] after:absolute after:-inset-0.5 after:bg-cyan-500 after:blur-sm after:opacity-50">
          Bernucci
        </span>
      </h2>
      <ul className="flex gap-7">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={300}
            className={`cursor-pointer p-3 ${activeLink === "home" ? "border-b-2 border-cyan-300 text-cyan-400" : " hover:"} hover:border-b-2 hover:border-cyan-300 hover:text-cyan-400 duration-100`}
            onClick={() => handleSetActive("home")}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={300}
            className={`cursor-pointer p-3 ${activeLink === "education" ? "border-b-2 border-cyan-300 text-cyan-400" : ""} hover:border-b-2 hover:border-cyan-300 hover:text-cyan-400 duration-100`}
            onClick={() => handleSetActive("education")}>
            Educação
          </Link>
        </li>
        <li>
          <Link
            to="technologies"
            smooth={true}
            duration={300}
            className={`cursor-pointer p-3 ${activeLink === "technologies" ? "border-b-2 border-cyan-300 text-cyan-400" : ""} hover:border-b-2 hover:border-cyan-300 hover:text-cyan-400 duration-100`}
            onClick={() => handleSetActive("technologies")}>
            Tecnologias
          </Link>
        </li>
        <li>
          <Link
            to="projetos"
            smooth={true}
            duration={300}
            className={`cursor-pointer p-3 ${activeLink === "projetos" ? "border-b-2 border-cyan-300 text-cyan-400" : ""} hover:border-b-2 hover:border-cyan-300 hover:text-cyan-400 duration-100`}
            onClick={() => handleSetActive("projetos")}>
            Projetos
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={300}
            className={`cursor-pointer p-3 ${activeLink === "contact" ? "border-b-2 border-cyan-300 text-cyan-400" : ""} hover:border-b-2 hover:border-cyan-300 hover:text-cyan-400 duration-100`}
            onClick={() => handleSetActive("contact")}>
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
