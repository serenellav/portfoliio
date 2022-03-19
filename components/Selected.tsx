import React from "react";
import { motion, useMotionValue } from "framer-motion";
import { useRouter } from 'next/router';
import { useSwipeable } from 'react-swipeable';
import { InView, useInView } from "react-intersection-observer";

import Link from 'next/link'
import { items } from "./Data";
import { useScrollConstraints } from "../utils/use-scroll-constraints";
import { useWheelScroll } from "../utils/use-wheel-scroll";
import { useAppSelector } from "../store/hooks";
import { cartSelector } from "../store/cart.slice";
import Video from "./Video";

interface Props {
    id?: any,
    isSelected?: boolean,
    history?: {
        push: (route: string) => void;
    };
}


export const Selected: React.FC<Props> = ({ id, isSelected = true, history }) => {
    const { data } = useAppSelector(cartSelector)
    // const [item,setItem] = React.useState(data.find(item => item.id === parseInt(id)))
    const item = data.find(item => item.id === parseInt(id));
    //   const [bottom, inViewBottom] = useInView({
    //     threshold: 1,
    //   })
    //   const [top, inViewTop] = useInView({
    //     threshold: 1,
    //   })
    //   console.log(item,data,id)

    const router = useRouter();

    //   function swipeUpTodismiss() {
    //     if(inViewBottom ){
    //       console.log("inview")
    //     router.push({ pathname: "/" }, undefined, { scroll: false })}
    //   }
    //   function swipeBottomTodismiss() {
    //     if(inViewTop ){
    //       console.log("inview")
    //     router.push({ pathname: "/" }, undefined, { scroll: false })}
    //   }

    //   const handlers = useSwipeable({
    //     onSwipedUp: () => swipeUpTodismiss(),
    //     onSwipedDown:() => swipeBottomTodismiss(),

    // preventDefaultTouchmoveEvent: true,
    // trackMouse: true
    //   });

    return (
        <>
    
            <div  >
                <Video src={item?.acf.link}></Video>
                {/* <img className="card-image" src={`images/${id}.jpg`} alt="" /> */}
            </div>
            <div
                className="title-container" >
                <span className="category">
                    {item?._embedded["wp:term"][0][0].name}
                </span>
                <h2>{item?.title.rendered}</h2>
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




        </>
    );
}
