'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsAccordion({ projects }) {
    const [openSlug, setOpenSlug] = useState(null)

    const sortedProjects = [...projects].sort((a, b) => {
        if (a.status === 'current') return -1;
        if (b.status === 'current') return 1;
        return new Date(b.publishedAt) - new Date(a.publishedAt);
    });

    const toggle = (slug) => {
        setOpenSlug(prev => (prev === slug ? null : slug));
    };

    return (
        <ul className="flex flex-col gap-4 max-w-4xl mx-auto">
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
                            className="w-full flex items-center gap-6 p-5 text-left"
                            aria-expanded={isOpen}
                        >
                            {project.image && (
                                <div className="w-28 h-20 relative bg-muted overflow-hidden rounded-lg shrink-0">
                                    <Image
                                        src={`/${project.image}`}
                                        alt={project.title || ''}
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            )}

                            <div className="flex-1 relative min-w-0">
                                <h2 className="text-lg font-bold mb-1 truncate">{project.title}</h2>
                                <p className="text-sm text-muted-foreground truncate">{project.summary}</p>
                            </div>

                            <span
                                className={`text-muted-foreground transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''
                                    }`}
                            >
                                ▾
                            </span>
                        </button>

                        <div
                            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                }`}
                        >
                            <div className="overflow-hidden">
                                <div className="px-6 pb-6 pt-2 border-t border-white/10">
                                    <p className="text-xs font-light text-muted-foreground mt-4 mb-2">
                                        {project.status === 'current'
                                            ? 'Work in progress'
                                            : project.publishedAt
                                                ? new Date(project.publishedAt).toLocaleDateString()
                                                : ''}
                                    </p>

                                    {project.technology && Array.isArray(project.technology) && (
                                        <div className="flex flex-wrap gap-2 mb-4">
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