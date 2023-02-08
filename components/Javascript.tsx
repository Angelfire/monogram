import Image from "next/image"

export const Javascript = () => (
  <section className="bg-white relative" id="js">
    <div className="flex flex-col items-center px-8 py-12 relative md:container md:md:pt-16 md:mx-auto z-30">
      <Image
          alt="javascript background"
          src="/bgjs.svg"
          fill
          priority
        />
      <h2 className="font-black mb-9 text-4xl text-white z-10 md:text-9xl">javascript</h2>
      <p className="text-base text-center text-white z-10 md:text-lg md:w-1/3">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
      <Image
        alt="retro computer"
        className="translate-y-60"
        height={700}
        src="/retrocomputer.svg"
        priority
        width={700}
      />
    </div>
    <div className="bg-black bg-[url('/bggrid.svg')] bg-repeat absolute h-48 w-full -bottom-10" />
  </section>
)
