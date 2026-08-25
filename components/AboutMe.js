import Image from 'next/image'

export default function AboutMe() {
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 mt-36 md:flex-row md:items-center max-w-2xl mx-auto pb-24" id="about">
      <section className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-1 text-left">
          <h1 className="text-3xl font-bold decoration-border/75 decoration-2 underline-offset-8">
            Hey, I&apos;m Cristian Valle.
          </h1>
          <p className="mt-3 font-light text-muted-foreground">
            I&apos;m a software engineer based in New York City. I&apos;m
            passionate about learning new technologies. Currently, I&apos;m 
            working on a Esthetician Booking Website with appointment scheduling, 
            availability management and Stripe checkout for deposits.
          </p>
        </div>
        <div className="relative flex-shrink-0">
          <Image
            className="rounded-lg hover:grayscale-0 transition duration-300"
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
