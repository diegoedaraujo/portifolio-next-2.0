import Image from 'next/image'
import Head from 'next/head'
import { NextPage } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const Home: NextPage = ()=> {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
      <Head>
        <title>{`Diego's Portifolio`}</title>
      </Head>

      <Header />

      <section id='hero'>
        <Hero />
      </section>
    </div>    
  )
}

export default Home

// export default function Home() {
//   return (
//     <main>
//       <Head>Teste</Head>
//     </main>
//   )
// }