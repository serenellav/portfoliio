import '../styles/globals.css'
import { AnimatePresence ,AnimateSharedLayout} from "framer-motion";
import type { AppProps } from 'next/app'
import {Provider} from "react-redux"
import { store } from '../store/index'
import Header from '../components/Header';

function MyApp({ Component, pageProps ,router}: AppProps) {
  return <Provider store={store}>
<Header></Header>
      <AnimatePresence    exitBeforeEnter >
  <Component key={router.route} {...pageProps} />
  </AnimatePresence>
 
  </Provider>
}

export default MyApp
