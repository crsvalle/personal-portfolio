import Image from 'next/image'

export default function AboutMe() {
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 mt-24 md:flex-row md:items-center max-w-4xl mx-auto" id="about">
      <section className="flex flex-col md:flex-row items-center gap-6 md:gap-10 pb-24" id="intro">
        <div className="flex-1 text-left">
          <h1 className="text-3xl font-bold decoration-border/75 decoration-2 underline-offset-8">
            Hey, I&#39;m Cristian Valle.
          </h1>
          <p className="mt-3 text-muted-foreground">
            I&#39;m a software engineer based in New York City. I&#39;m
            passionate about learning new technologies. Currently, I'm 
            working on a project that leverages image recognition to identify 
            car models with impressive accuracy.
          </p>
        </div>
        <div className="relative flex-shrink-0">
          <Image
            className="rounded-lg  hover:grayscale-0 transition duration-300"
            src="/cv.jpg"
            alt="Cristian V"
            width={175}
            height={175}
            priority
          />
        </div>
      </section>

    </section>
  );
}

