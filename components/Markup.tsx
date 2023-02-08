export const Markup = () => (
  <section className="bg-white pt-56 px-8 relative h-[800px] bg-[url('/bgmarkup.svg')] bg-bottom md:bg-auto bg-no-repeat md:pt-80 md:h-[1600px]">
    <div className="container mx-auto justify-between flex md:flex-row">
      <div className="w-full flex flex-col items-center  md:w-1/2 ">
        <h1 className="font-black mb-9 text-4xl md:text-9xl">markup</h1>
        <p className="flex font-light justify-center text-slate-500 text-base md:text-lg md:w-3/5">When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website. The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN like Vercel’s Edge Network.</p>
        <div className="relative mt-12 hidden md:block">
          <div className="bg-[#0165B1] h-14 w-80 -rotate-12 rounded-md" />
          <div className="absolute bg-[#D12510] h-14 w-80 rotate-12 top-56 -left-24 rounded-md" />
          <div className="absolute bg-[#FEC05C] h-14 w-80 -rotate-45 rounded-md right-12 top-52" />
        </div>
      </div>
      <div className="hidden relative w-1/2 md:block">
        <div className="absolute bg-[url('/rectangles.svg')] w-72 h-[629px] rounded-[68px] top-36 z-10" />
        <div className="absolute bg-[url('/rectangles.svg')] w-72 h-[629px] rounded-[68px] right-16 z-20" />
        <div className="absolute bg-white/70 backdrop-blur-xl w-72 h-[629px] rounded-[68px] left-24 top-96 z-30" />
        <div className="absolute bg-white/70 backdrop-blur-xl w-72 h-[629px] rounded-[68px] right-0 top-[200px] z-40" />
      </div>
    </div>
  </section>
)
