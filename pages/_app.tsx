import '../styles/globals.css'
import { AnimatePresence ,AnimateSharedLayout} from "framer-motion";
import type { AppProps } from 'next/app'
import {Provider} from "react-redux"
import { store } from '../store/index'

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <AnimateSharedLayout >
  <Component {...pageProps} />
  </AnimateSharedLayout>
  </Provider>
}

export default MyApp
