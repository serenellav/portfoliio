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
        description="Creatore di modelli 3D"
        canonical="https://paolominopoli.vercel.app/"
        openGraph={{
          url: "https://paolominopoli.vercel.app/",
          title: "Paolo Minopoli",
          description: "Creatore di modelli 3D",
          images: [
            {
              url: "/avatar-paolo.png",
              width: 800,
              height: 420,
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
