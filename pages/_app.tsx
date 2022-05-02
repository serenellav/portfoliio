import '../styles/globals.css'
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import { store } from '../store/index'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { NextSeo } from 'next-seo';
import CookieConsent from "react-cookie-consent";

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
      <CookieConsent
    contentStyle={{margin:"0px",position:"relative"}}
  location="bottom"
  buttonText="Ok,Ho capito."
  cookieName="myAwesomeCookieName2"
  style={{ background: "#000" ,fontSize: "13px",fontWeight: 800}}
  buttonStyle={{ color: "#fff",fontWeight: 800, fontSize: "13px",background: "#008069",margin:"5px" }}
  expires={150}
>
  Questo sito usa cookies per migliorare la tua esperienza di navigazione.{" "}
  <span style={{ fontSize: "13px" }}><a style={{ fontSize: "13px",color:"#008069",textDecoration:"underline"}} href="/PrivacyPolicy">Vedi cookies e privacy policy</a></span>
</CookieConsent>
    </AnimatePresence>

  </Provider>
}

export default MyApp
