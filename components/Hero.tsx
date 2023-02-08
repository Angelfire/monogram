import Image from "next/image";
import Link from "next/link";

export const Hero = () => (
  <section className="bg-white relative px-8 py-12 md:h-[1020px] md:mt-36">
    <div className="flex flex-col md:container md:mx-auto md:justify-between md:flex-row">
      <div className="flex flex-col items-center md:items-start md:w-1/2">
        <h1 className="font-black mb-9 text-4xl md:text-9xl">jamstack <span className="bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-500 text-transparent md:ml-6 md:absolute">101</span></h1>
        <p className="flex font-light justify-center text-slate-500 text-base md:text-lg md:mr-20 md:ml-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.</p>
        <Link href="#js" className="hidden self-center mt-12 md:block">
          <Image
            src="/linemouse.svg"
            alt="line mouse"
            width={81}
            height={580}
          />
        </Link>
      </div>
      <div className="hidden relative w-1/2 md:block">
        <div className="absolute bg-gradient-to-b from-yellow-200 via-orange-500 to-pink-500 w-72 h-[629px] rounded-[68px] top-36 z-10" />
        <div className="absolute bg-gradient-to-b from-yellow-200 via-orange-500 to-pink-500 w-72 h-[629px] rounded-[68px] right-16 z-20" />
        <div className="absolute bg-white/70 backdrop-blur-xl w-72 h-[629px] rounded-[68px] left-24 top-96 z-30" />
        <div className="absolute bg-white/70 backdrop-blur-xl w-72 h-[629px] rounded-[68px] right-0 top-[200px] z-40" />
      </div>
    </div>
  </section>
)
