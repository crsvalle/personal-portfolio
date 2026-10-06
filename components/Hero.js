import Link from 'next/link'

export default function Hero() {
    return (
        <section id="hero" className="px-6 pt-36 pb-16">
            <div className="max-w-2xl mx-auto">
                <p className=" fade-up text-xl text-muted-foreground">
                    Hi, I&apos;m Cristian
                </p>

                <h1 className="fade-up delay-1 mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                    I turn ideas into working web apps.
                </h1>

                <p className="fade-up delay-2 mt-4 font-light text-muted-foreground">
                    From booking systems to payment flows, I build full-stack apps with
                    Next.js and React. Currently studying network engineering on the side.
                </p>

                <div className="fade-up delay-3 mt-8 flex flex-wrap items-center gap-6 text-sm">
                    <Link
                        href="#projects"
                        className="rounded-full border border-white/20 px-5 py-2 transition-colors hover:border-white/50"
                    >
                        View projects
                    </Link>
                    <Link
                        href="#contact"
                        className="text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground"
                    >
                        Contact me
                    </Link>
                </div>
            </div>
        </section>
    )
}