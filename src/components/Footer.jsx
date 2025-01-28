import { socialMedia } from "../constants";
import MediaLinks from "./MediaLinks";

function Footer() {
  return (
    <footer className="bg-stone-950 p-8 grid justify-center gap-5">
      <ul className="flex gap-3 justify-center">
        {socialMedia.map((item) => (
          <MediaLinks key={item.id} id={item.id} href={item.href} Icon={item.Icon} />
        ))}
      </ul>
      <p className="text-sm text-stone-500">© Alvaro Bernucci | Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;
