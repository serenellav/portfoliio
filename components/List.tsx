import React from "react";
import { items } from "./Data";
import Link from 'next/link'
import { motion } from "framer-motion";
import { GetStaticPropsResult } from "next";
import Video from "./Video";
import { useAppSelector } from "../store/hooks";
import { cartSelector } from "../store/cart.slice";
import Card from "./Card";


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





 const List: React.FC<Props> = ({video}) => {
    const {data} =useAppSelector(cartSelector)
  console.log(data)

    // React.useEffect(()=>{
    //     const contenuto = document.querySelector("body");
    //     contenuto?.classList.remove("overflow-hidden");
    //   },[])
    return (
        <div id="card-list-container">
          {/* {    data?.map((row,i) => (
        <Video  key={i} src={row.acf.link}></Video>))} */}
        <ul className="card-list">
            {data.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </ul>
        </div>
    );
}

  export default List;