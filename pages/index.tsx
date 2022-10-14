import Footer from 'components/Footer'
import Hero from 'components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Voidpage - Bringing a beautiful newtab to the masses</title>
      </Head>
      <Hero />
      <Footer />
    </>
  )
}
