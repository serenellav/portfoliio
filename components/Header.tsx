import Link from "next/link"
import SwipableMap from "./menu/SwipableMap"
import SwipableMenu from "./menu/SwipableMenu"


const Header = (): JSX.Element => (
    <header
    className="header"
  
    >
        <SwipableMenu/>
        <Link href="/" >
            <a>
              <div className="logo">
              <img src="./logo-home-web-6.png" alt="" />
              </div>
            </a>
        </Link>
      <SwipableMap/>
    </header>
)

export default Header