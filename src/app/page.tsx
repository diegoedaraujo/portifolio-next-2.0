import Image from 'next/image'
import Head from 'next/head'
import { NextPage } from 'next'
import Header from '@/components/Header'

const Home: NextPage = ()=> {
  return (
    <div>
      <Head>
        <title>{`Diego's Portifolio`}</title>
      </Head>

      <Header />
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