import Link from "next/link"

import SwipableMenu from "./menu/SwipableMenu"
import SwipableInfo from "./menu/SwipableInfo"


const Header = (): JSX.Element => (
    <header
    className="header"
  
    >
       
        <Link href="/" >
            <a>
            <h1 style={{fontWeight:"800",margin:0}}>PORT<span style={{color:"#ff8800"}}>FOLIO</span></h1>
            </a>
        </Link>
        <SwipableMenu/>
    </header>
)

export default Header