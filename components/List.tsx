import React from "react";
import { items } from "./Data";
import Link from 'next/link'
import { motion } from "framer-motion";


interface Props {
    id?: any,
    title?: any,
    category?: any,
    theme?: any,
    isSelected?: boolean,
    selectedId?: any

}



const Card: React.FC<Props> = ({ id, title, category, theme, isSelected }) => {
    return (
        <li className={`card ${theme}`}>

            <div className="card-content-container">
                <motion.div className="card-content" layoutId={`card-container-${id}`}>
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        {/* <img className="card-image" src={`images/${id}.jpg`} alt="" /> */}
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <span className="category">{category}</span>
                        <h2>{title}</h2>
                        <Link href={`/${id}`} scroll={false} >
                            <a >apri</a>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>



        </li>
    );
}

export const List: React.FC<Props> = ({ selectedId }) => {

    React.useEffect(()=>{
        const contenuto = document.querySelector("body");
        contenuto?.classList.remove("overflow-hidden");
      },[])
    return (
        <div id="card-list-container">
        <ul className="card-list">
            {items.map(card => (
                <Card key={card.id} {...card} />
            ))}
        </ul>
        </div>
    );
}
