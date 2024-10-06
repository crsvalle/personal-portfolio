import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <AboutMe />
        <Skills />
      </div>
    </main>
  );
}
