import styles from '@/styles/Scores.module.css'
import Image from 'next/image'

export const Scores = () => (
  <section className="relative">
    <div className={`${styles.scores} relative container h-[800px] flex flex-col items-center mx-auto pt-24 rounded-[68px] -translate-y-20 md:h-[1300px]`}>
      <h2 className="font-black text-4xl text-[#EFFFE2] md:text-7xl">top audit scores</h2>
      <div className="grid grid-cols-4 my-12">
        <Image
          src="/scorehigh.svg"
          alt="high score"
          height={300}
          width={300}
        />
        <Image
          src="/scorehigh.svg"
          alt="high score"
          height={300}
          width={300}
        />
        <Image
          src="/scorelow.svg"
          alt="high score"
          height={300}
          width={300}
        />
        <Image
          src="/scorehigh.svg"
          alt="high score"
          height={300}
          width={300}
        />
      </div>
      <div className="px-8 md:w-2/3">
        <p className="text-base mb-8 bg-clip-text bg-gradient-to-l text-transparent from-lime-100 to-lime-900 md:text-2xl">Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.</p>
        <p className="text-base mb-8 bg-clip-text bg-gradient-to-l text-transparent from-lime-100 to-lime-900 md:text-2xl">Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.</p>
        <p className="text-base mb-8 bg-clip-text bg-gradient-to-l text-transparent from-lime-100 to-lime-900 md:text-2xl">A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience</p>
      </div>
    </div>
  </section>
)
