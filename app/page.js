import Projects from "@/Projects";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";


export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 bg-black text-white">
      <div className="flex flex-col items-center gap-y-48">
        <AboutMe />
        <Projects />
        <Skills />
      </div>
    </main>
  );
}
