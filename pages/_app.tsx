import type { AppProps } from 'next/app'

import Navbar from '../components/Navbar'
import RootContext from '../context/RootContext'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RootContext>
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  </RootContext>
)
export default MyApp
