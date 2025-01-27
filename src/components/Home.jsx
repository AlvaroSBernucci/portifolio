import perfilImg from "../assets/perfil.jpg";
import { socialMedia } from "../constants";
import MediaLinks from "./MediaLinks";
import Button from "./Button";

function Home() {
  return (
    <section id="home" className="container p-4 py-16 mx-auto grid grid-cols-2 min-h-screen items-center">
      <div className="grid gap-8">
        <h1 className="text-6xl">
          Olá, sou <span className="text-cyan-400">Álvaro</span>
        </h1>
        <h2 className="text-3xl">
          Desenvolvedor <span className="text-cyan-400">FullStack</span>
        </h2>
        <p className="text-sm">
          Após uma longa carreira como Analista de Business Intelligence, mudei para o desenvolvimento de software, motivado pela minha paixão por
          tecnologia e inovação. Completei um bootcamp intensivo e renomado na Le Wagon, onde trabalhei em projetos do mundo real usando Ruby on Rails
          e JavaScript, focando na construção de aplicações web robustas e escaláveis, além de outros cursos feitos como HTML, CSS, JavaScript e React
          na Origamid.
        </p>
        <ul className="flex gap-3">
          {socialMedia.map((item) => (
            <MediaLinks key={item.id} id={item.id} href={item.href} Icon={item.Icon} />
          ))}
        </ul>
        <div className="flex gap-3">
          <Button>Contratar</Button>
          <Button>Contato</Button>
        </div>
      </div>
      <img
        src={perfilImg}
        alt="Foto de perfil"
        className="rounded-full max-w-96 max-h-96 border-cyan-400 border-2 shadow-[0_0_5px_5px_rgba(6,182,212,0.5)] justify-self-center hover:shadow-[0_0_20px_20px_rgba(6,182,212,0.5)] duration-300"
      />
    </section>
  );
}

export default Home;
