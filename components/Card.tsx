import React from "react";
import { items } from "./Data";
import Link from 'next/link'
import { motion } from "framer-motion";
import { GetStaticPropsResult } from "next";
import Video from "./Video";
import { useAppSelector } from "../store/hooks";
import { cartSelector } from "../store/cart.slice";


interface Props {
    id?: any,
    title?: any,
    category?: any,
    theme?: any,
    isSelected?: boolean,
    selectedId?: any
    video?:any[],
    item?:any,

}

const Card: React.FC<Props> = ({ id, title, category, theme, isSelected ,item}) => {

    
    return (
        <li className={`card`}>
        <Link href={`/${item?.id}`} scroll={false} >
      <a >

      <div 
       className="card-content-container"
      >
          <div className="card-content">
              <div
                  className="card-image-container"
                 
              >
                    <Video  src={item?.acf.link}></Video>
                  {/* <img className="card-image" src={`images/${id}.jpg`} alt="" /> */}
              </div>
            
          </div>
          <div
                  className="title-container"
                
              >
                  <span className="category">
                  {item._embedded["wp:term"][0][0].name}
                  </span>
                  <h2>{item.title.rendered}</h2>
                  
                   
                 
              </div>
      </div>

      </a>
   </Link>

  </li>
    );
}

export default Card;