// Packages
import type { AppProps } from 'next/app'

// Global Styles
import '../styles/globals.css'

// Wrapper Redux
import { wrapper } from '../redux/store'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);