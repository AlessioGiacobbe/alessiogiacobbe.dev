import Head from 'next/head'
import { IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import '../styles/globals.css'

const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '600'], display: 'swap' })

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Alessio Giacobbe</title>
      <style dangerouslySetInnerHTML={{ __html: `:root { --font-plex: ${plexMono.style.fontFamily}; }` }} />
    </Head>
    <Component {...pageProps} />
    <Analytics />
  </>
}

export default MyApp
