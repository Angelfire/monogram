import Image from "next/image";

export const Footer = () => (
  <footer className="relative py-20 px-8 flex flex-col items-center md:container md:mx-auto">
    <p className="text-white mb-8 text-center text-sm md:text-2xl">This is a design test by Andrés Bedoya for Monogram.</p>
    <Image
      className="hover:animate-ping"
      src="/heart.svg"
      alt="Monogram heart"
      height="36"
      width="36"
    />
  </footer>
)