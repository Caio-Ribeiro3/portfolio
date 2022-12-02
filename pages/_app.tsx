import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const getLayout = Component.getLayout || ((page) => page)

  useEffect(() => {
    const callback = () => {
      window.screen.orientation.lock("portrait-primary")
    }

    window.screen.orientation.addEventListener('change', callback)

    return () => {
      window.screen.orientation.removeEventListener('change', callback)
    }

  }, [])


  return getLayout(<Component {...pageProps} />)
}
