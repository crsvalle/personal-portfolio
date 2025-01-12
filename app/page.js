import ContactForm from "@/components/contact-form";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import RecentProjects from "@/components/Recent-projects";


export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 bg-black text-white">
      <div className="flex flex-col items-center gap-y-20">
        <AboutMe />
        <RecentProjects />
        <Skills />
        <ContactForm />
      </div>
    </main>
  );
}
