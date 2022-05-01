import '../styles/globals.css'
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '../store/index'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps, router }: AppProps) {
  return <Provider store={store}>
       <NextSeo
       title = 'Portfolio'
       titleTemplate = 'Paolo Minopoli | %s'
        defaultTitle="Paolo Minopoli"
        description="3D Designer"
        canonical="https://paolominopoli.vercel.app/"
        openGraph={{
          type: 'website',
          url: "https://paolominopoli.vercel.app/",
          title: "Paolo Minopoli",
          description: "3D Designer",
          images: [
            {
              url: "https://paolominopoli.vercel.app/avatar-paolo.png",
              alt: "Paolo Minopoli",
            },
          ],
        }}
       
      />

    <Header></Header>
    <Sidebar></Sidebar>
    <AnimatePresence exitBeforeEnter >
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>

  </Provider>
}

export default MyApp
