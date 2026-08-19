import { getProjects } from '../../lib/projects'
import ProjectsAccordion from '../../components/ProjectsAccordion'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen px-6 py-10 text-white">
      <div className="flex flex-col items-center gap-y-20">
        <section id="all-projects" className="w-full max-w-4xl mx-auto pb-24 mt-36">
          <h2 className="mb-10 text-2xl font-bold">All Projects</h2>
          <ProjectsAccordion projects={projects} />
        </section>
      </div>
    </main>
  )
}