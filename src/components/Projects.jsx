import ProjectItem from "./ProjectItem";

const data = [
  {
    img: new URL("../assets/webpage.png", import.meta.url).href,
    tech: "ViteJS",
    title: "My Webpage (2023)",
    link: "https://my-webpage-two.vercel.app/",
  },
  {
    img: new URL("../assets/tetris.png", import.meta.url).href,
    tech: "React",
    title: "Tetris game (2023)",
    link: "https://tetris-react-eight.vercel.app/",
  },
  {
    img: new URL("../assets/feed-a-mole.png", import.meta.url).href,
    tech: "Javascript",
    title: "Feed-a-Mole game (2023)",
    link: "https://feed-a-mole.vercel.app/",
  },
  {
    img: new URL("../assets/pokedex.png", import.meta.url).href,
    tech: "NextJS",
    title: "Pokedex (2022)",
    link: "https://pokedex-fede.vercel.app/",
  },
  {
    img: new URL("../assets/patisserie.png", import.meta.url).href,
    tech: "React",
    title: "Mock Patisserie's Webpage (2021)",
    link: "https://patisserie-iudice-l44pd107z-iudicefederico.vercel.app/",
  },
  {
    img: new URL("../assets/bank.png", import.meta.url).href,
    tech: "Javascript",
    title: "Bank Loan's Simulator (2021)",
    link: "https://simulador-banco.vercel.app/",
  },
  {
    img: new URL("../assets/guimarey.png", import.meta.url).href,
    tech: "HTML/CSS",
    title: "Luthier Guimarey's Webpage (2021)",
    link: "https://guimarey-luthier-alpha.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-4 pb-28"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Here you&apos;ll see some of my projects, feel free to ask anything!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        {data.map((item, idx) => {
          return (
            <ProjectItem
              key={idx}
              img={item.img}
              tech={item.tech}
              title={item.title}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
}
