'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsAccordion({ projects }) {
    const [openSlug, setOpenSlug] = useState(null)

    const sortedProjects = [...projects].sort((a, b) => {
        if (a.publishedAt === "current") return -1;
        if (b.publishedAt === "current") return 1;
        return new Date(b.publishedAt) - new Date(a.publishedAt);
    });

    const toggle = (slug) => {
        setOpenSlug(prev => (prev === slug ? null : slug));
    };

    return (
        <ul className="flex flex-col gap-4 max-w-4xl">
            {sortedProjects.map(project => {
                const isOpen = openSlug === project.slug;

                return (
                    <li
                        key={project.slug}
                        className="border border-white/10 rounded-lg overflow-hidden transition-colors hover:border-white/30"
                    >
                        <button
                            type="button"
                            onClick={() => toggle(project.slug)}
                            className="w-full flex flex-col sm:flex-row items-start gap-6 p-6 text-left"
                            aria-expanded={isOpen}
                        >
                            {project.image && (
                                <div className="w-full sm:w-1/3 h-40 relative bg-muted overflow-hidden rounded-lg shrink-0">
                                    <Image
                                        src={`/${project.image}`}
                                        alt={project.title || ''}
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            )}

                            <div className="flex-1 relative">
                                <div className="flex items-center justify-between gap-4">
                                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                                    <span
                                        className={`text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''
                                            }`}
                                    >
                                        ▾
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">{project.summary}</p>
                                <p className="text-xs font-light text-muted-foreground">
                                    {project.publishedAt && project.publishedAt !== 'current'
                                        ? new Date(project.publishedAt).toLocaleDateString()
                                        : project.publishedAt === 'current'
                                            ? 'Current'
                                            : ''}
                                </p>
                            </div>
                        </button>

                        <div
                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                }`}
                        >
                            <div className="overflow-hidden">
                                <div className="px-6 pb-6 pt-2 border-t border-white/10">
                                    {project.technology && Array.isArray(project.technology) && (
                                        <div className="flex flex-wrap gap-2 mb-4 mt-4">
                                            {project.technology.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-block mb-4 text-sm underline underline-offset-2 hover:text-[#fd2a5c]"
                                        >
                                            View live site →
                                        </Link>
                                    )}

                                    <div
                                        className="prose prose-invert max-w-none prose-sm"
                                        dangerouslySetInnerHTML={{ __html: project.contentHtml }}
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}