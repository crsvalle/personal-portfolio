import Image from 'next/image'

export default function AboutMe() {
  return (
    <section className="max-w-2xl mx-auto pb-24" id="about">
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-6 md:gap-10">
        <div className="flex-1 text-left">
          <h2 className="text-3xl font-bold">About me</h2>
          <p className="mt-3 font-light text-muted-foreground">
            I&apos;m a software engineer based in New York City, and I love
            learning new technologies. Right now I&apos;m building an
            esthetician booking website with appointment scheduling,
            availability management, and Stripe checkout for deposits.
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
      </div>
    </section>
  )
}