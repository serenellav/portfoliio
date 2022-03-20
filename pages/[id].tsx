
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { CardSelected } from '../components/CardSelected'
import Home from '../components/Home'
import { Selected } from '../components/Selected'
import Video from '../components/Video'
import { cartSelector } from '../store/cart.slice'
import { useAppSelector } from '../store/hooks'

const Post = () => {
  const router = useRouter()
  const { id } = router.query

  const { data } = useAppSelector(cartSelector)
  // const [item,setItem] = React.useState(data.find(item => item.id === parseInt(id)))
  const item = data.find(item => item.id.toString() === id);

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

      const contenuto = document.querySelector("body");
       contenuto?.setAttribute("class", "overflow-hidden");
       navigate()
    };
  },[])

  return <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}  className="div">
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

export default Post