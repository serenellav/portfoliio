import type { GetStaticPropsResult, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAppDispatch,useAppSelector } from '../store/hooks'
import { cartSelector, setData } from '../store/cart.slice'
import React from 'react'
import Home  from '../components/Home'
import { AnimatePresence, motion } from 'framer-motion'
import Card from '../components/Card'


interface Props {

  video?:any[],

}

const Casa: NextPage<Props> = ({video}) => {
const {data} =useAppSelector(cartSelector)

  const dispatch = useAppDispatch()

  React.useEffect(()=>{
dispatch(setData(video))
const contenuto = document.querySelector("body");
contenuto?.classList.remove("overflow-hidden");

  },[video])
  return (
  
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}  id="card-list-container" >
       
        <ul className="card-list">
            {video?.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </ul>
        </motion.div>
  
  )
}
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>>  {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

 

  const url =
  "https://www.dariovettura.com/dance/wp-json/wp/v2/posts?_embed";

  //const result = await Axios.get(url);
  //const menu =  result.data

  const res = await fetch(url);
 
  const video = await res.json();

  //  const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      video,
  
    },
    revalidate: 1,
  };
}
export default Casa
