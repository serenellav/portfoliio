
import { AnimatePresence, motion } from 'framer-motion'
import { GetStaticPaths, GetStaticPropsResult, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { CardSelected } from '../components/CardSelected'
import Home from '../components/Home'
import { Selected } from '../components/Selected'
import Video from '../components/Video'
import { cartSelector } from '../store/cart.slice'
import { useAppSelector } from '../store/hooks'

interface Props {

  video?:any[],

}

const Post: NextPage<Props> = ({video}) =>  {
  const router = useRouter()
  const { id } = router.query

  const { data } = useAppSelector(cartSelector)
  // const [item,setItem] = React.useState(data.find(item => item.id === parseInt(id)))
  const item = 
   video?.find(item => item.id.toString() === id);

  // React.useEffect(()=>{
  //   const contenuto = document.querySelector("body");
  //   contenuto?.setAttribute("class", "overflow-hidden");
  // },[])
  async function navigate() {
    router.push({
      pathname: "/",
    
    }, undefined, { scroll: false });
  }

  React.useEffect(()=>{
    window.scrollTo(0, 0);
  
    console.log("ciao")
    window.onpopstate = () => { 

     
       navigate()
    };
  },[])

  return <motion.div  className="div">
    <div>
      <div >
        <Video src={item?.acf.link}></Video>
      
      </div>
      <div
        className="title-container" >
        <span className="category">
          {item?._embedded["wp:term"][0][0].name}
        </span>
        <h2 onClick={()=>navigate()}>{item?.title.rendered}</h2>
      </div>

      <div className="content-container" >
        <p style={{}}>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias odit eum beatae eius laboriosam, numquam repellat aspernatur nisi omnis provident inventore nobis unde
          quibusdam dolorem aliquid
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos, dolor eaque iure commodi dolore officiis placeat animi ea pr
          aesentium in vitae non pariatur nam molestias odio temporibus facilis accusamus rem?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos, dolor eaque iure commodi dolore officiis placeat animi ea pr
          aesentium in vitae non pariatur nam molestias odio temporibus facilis accusamus rem?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos, dolor eaque iure commodi dolore officiis placeat animi ea pr
          aesentium in vitae non pariatur nam molestias odio temporibus facilis accusamus rem?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos, dolor eaque iure commodi dolore officiis placeat animi ea pr
          aesentium in vitae non pariatur nam molestias odio temporibus facilis accusamus rem?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos, dolor eaque iure commodi dolore officiis placeat animi ea pr
          aesentium in vitae non pariatur nam molestias odio temporibus facilis accusamus rem?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos, dolor eaque iure commodi dolore officiis placeat animi ea pr
          aesentium in vitae non pariatur nam molestias odio temporibus facilis accusamus rem?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos, dolor eaque iure commodi dolore officiis placeat animi ea pr
          aesentium in vitae non pariatur nam molestias odio temporibus facilis accusamus rem?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos, dolor eaque iure commodi dolore officiis placeat animi ea pr
          aesentium in vitae non pariatur nam molestias odio temporibus facilis accusamus rem?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos, dolor eaque iure commodi dolore officiis placeat animi ea pr
          aesentium in vitae non pariatur nam molestias odio temporibus facilis accusamus rem?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos, dolor eaque iure commodi dolore officiis placeat animi ea pr
          aesentium in vitae non pariatur nam molestias odio temporibus facilis accusamus rem?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos, dolor eaque iure commodi dolore officiis placeat animi ea pr
          aesentium in vitae non pariatur nam molestias odio temporibus facilis accusamus rem?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Dignissimos, dolor eaque iure commodi dolore officiis placeat animi ea pr
          aesentium in vitae non pariatur nam molestias odio temporibus facilis accusamus rem?
          v</p>


        <Link href="/" scroll={false} >
          <a >back</a>
        </Link>
      </div>
    </div>
  </motion.div>


}
export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
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

export default Post