import Image from "next/image";

export const Logos = () => (
  <section className="relative flex flex-col container mx-auto">
    <div className="grid grid-cols-4">
      <Image
        className="col-start-4 hover:blur-sm"
        src="/nextlogo.svg"
        alt="next logo"
        width={248}
        height={75}
      />
    </div>
    <div className="grid grid-cols-4">
      <Image
        className="hover:blur-sm"
        src="/reactlogo.svg"
        alt="react logo"
        width={248}
        height={75}
      />
    </div>
    <div className="grid grid-cols-4">
      <Image
        className="col-start-2 hover:blur-sm"
        src="/nextlogo.svg"
        alt="next logo"
        width={248}
        height={75}
      />
    </div>
    <div className="grid grid-cols-4">
      <Image
        className="col-start-4 hover:blur-sm"
        src="/reactlogo.svg"
        alt="react logo"
        width={248}
        height={150}
      />
    </div>
    <div className="grid grid-cols-4">
      <Image
        className="opacity-50 hover:blur-sm"
        src="/sveltelogo.svg"
        alt="svelte logo"
        width={248}
        height={75}
      />
    </div>
    <div className="grid grid-cols-4">
      <Image
        className="col-start-3 opacity-50 hover:blur-sm"
        src="/vuelogo.svg"
        alt="vue logo"
        width={248}
        height={75}
      />
    </div>
    <div className="grid grid-cols-4">
      <Image
        className="col-start-2 opacity-25 hover:blur-sm"
        src="/reactlogo.svg"
        alt="react logo"
        width={248}
        height={75}
      />
    </div>
    <div className="grid grid-cols-4">
    <Image
      className="col-start-4 opacity-25 hover:blur-sm"
      src="/sveltelogo.svg"
      alt="svelte logo"
      width={248}
      height={75}
    />
    </div>
  </section>
)
