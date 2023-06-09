import Card from '@/components/Card'
import Layout from '@/components/Layout'
import MainBannner from '@/components/MainBannner'
import Head from 'next/head'
import { createClient } from 'next-sanity'

export default function Home({data}) {
  console.log(data)
  return (
    <>
      <Head>
        <title>Medium Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-screen overflow-x-hidden'>
        <Layout>
          <MainBannner/>
          <div className='max-w-4xl mx-auto mt-10'>
              <Card/>
          </div>
          
        </Layout>        
      </main>
    </>
  )
}

const client = createClient({
  projectId: 'oy2k7yol',
  dataset: 'production',
  apiVersion:'2021-03-25',
  useCdn:false
})

const query = `*[_type=="post"]{
  _id,
  title
}`
export async function getServerSideProps(){
  const rsp = await client.fetch(query)
  
  console.log(rsp)

  return{
    props:{
      data:rsp
    }
  }
}