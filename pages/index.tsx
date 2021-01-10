import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>e-commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to Home</h1>
    </Layout>
  )
}
