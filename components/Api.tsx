import Image from "next/image";

export const Api = () => (
  <section className="relative container flex flex-col items-center mx-auto px-8">
    <h2 className="font-black text-4xl mb-9 text-white z-10 md:text-9xl">api</h2>
    <p className="text-center text-base text-white z-10 w-full md:text-2xl md:w-1/2">At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
    <Image
      alt="api"
      className="-translate-x-6 translate-y-40 md:translate-y-72 md:-translate-x-14 z-10"
      // className="absolute top-96 left-48 z-10 animate-[wiggle_60s_ease-in-out_infinite]"
      src="/apicircle.svg"
      width={910}
      height={910}
      priority
    />
  </section>
)
