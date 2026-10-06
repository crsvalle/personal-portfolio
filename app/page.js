import Hero from "@/components/Hero";
import ContactForm from "@/components/contact-form";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import RecentProjects from "@/components/Recent-projects";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      <div className="px-6 pb-10">
        <div className="flex flex-col items-center gap-y-20">
          <AboutMe />
          <RecentProjects />
          <Skills />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}