import { Api } from '@/components/Api'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Javascript } from '@/components/Javascript'
import { RootLayout } from '@/components/Layout'
import { Logos } from '@/components/Logos'
import { Markup } from '@/components/Markup'
import { Scores } from '@/components/Scores'

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <Javascript />
      <Logos />
      <Api />
      <Markup />
      <Scores />
      <Footer />
    </RootLayout>
  )
}
