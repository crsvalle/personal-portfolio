import Image from 'next/image'



export default function AboutMe() {
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 mt-24 md:flex-row md:items-center" id="about">
      <section className="flex flex-col md:flex-row items-center gap-6 md:gap-10 pb-24" id="intro">
        <div className="flex-1 text-left">
          <h1 className="text-2xl font-bold leading-tight no-underline">
            Hey, I&#39;m Cristian Valle.
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            I&#39;m a software engineer based in New York City. I&#39;m
            passionate about learning new technologies and sharing knowledge with
            others.
          </p>
        </div>

        <div className="relative flex-shrink-0">
          <Image
            className="rounded-lg grayscale hover:grayscale-0 transition duration-300"
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

