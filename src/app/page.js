import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <div>

      <section id="about" className="py-20">
        <AboutMe />
      </section>
      <section id="skills" className="py-20">
        <Skills />
      </section>
    </div>
  );
}
