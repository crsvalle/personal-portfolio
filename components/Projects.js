import Image from 'next/image'
import Link from 'next/link'

export default function Projects({ projects }) {
    const sortedProjects = projects
        .sort((a, b) => {
            if (a.publishedAt === "current") return -1; 
            if (b.publishedAt === "current") return 1;
            return new Date(b.publishedAt) - new Date(a.publishedAt);
        })
        .slice(0, 3);

    return (
        <ul className="grid gap-8 max-w-4xl">
            {sortedProjects.map(project => (
                <li key={project.slug} className="group flex flex-col sm:flex-row items-start gap-6">
                    <Link href={`/projects/${project.slug}`} className="flex flex-col sm:flex-row items-start gap-6">
                        {project.image && (
                            <div className="w-full sm:w-1/3 h-40 relative bg-muted overflow-hidden">
                                <Image
                                    src={`/${project.image}`}
                                    alt={project.title || ''}
                                    fill
                                    className="rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        )}

                        <div className="flex-1 relative">
                            <h2 className="text-xl font-bold mb-2">
                                {project.title}
                            </h2>
                            <p className="text-sm text-muted-foreground mb-2">
                                {project.summary}
                            </p>
                            <p className="text-xs font-light text-muted-foreground transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                {project.publishedAt
                                    ? new Date(project.publishedAt).toLocaleDateString()
                                    : ''}
                            </p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
