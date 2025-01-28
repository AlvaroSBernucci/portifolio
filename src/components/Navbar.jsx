import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import useMedia from "../hooks/useMedia";
import { ReactComponent as MenuMobile } from "../assets/hambMenu.svg";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia("(max-width: 48rem)");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    function resetMenu() {
      if (!mobile) {
        setMobileMenu(false);
      }
    }
    resetMenu();
  }, [mobile]);

  return (
    <nav className=" justify-between items-center bg-stone-950 text-gray-50 p-8 font-bold fixed top-0 left-0 right-0 z-10 flex">
      <h2 className="md:text-2xl">
        Alvaro{" "}
        <span className="text-cyan-200 relative after:content-[''] after:absolute after:-inset-0.5 after:bg-cyan-500 after:blur-sm after:opacity-50">
          Bernucci
        </span>
      </h2>
      {mobile && (
        <button onClick={() => setMobileMenu(!mobileMenu)}>
          <MenuMobile className="w-7 h-7 fill-white" />
        </button>
      )}
      <ul className={`md:flex gap-7 ${mobileMenu ? "grid absolute -bottom-58 right-0 text-center bg-stone-950" : "hidden"}`}>
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
            to="projects"
            smooth={true}
            duration={300}
            className={`cursor-pointer p-3 ${activeLink === "projects" ? "border-b-2 border-cyan-300 text-cyan-400" : ""} hover:border-b-2 hover:border-cyan-300 hover:text-cyan-400 duration-100`}
            onClick={() => handleSetActive("projects")}>
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
