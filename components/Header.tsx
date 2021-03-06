import Link from "next/link"

import SwipableMenu from "./menu/SwipableMenu"

import Logo from "./menu/Logo"


const Header = (): JSX.Element => (
  <header className="header">
    <Logo></Logo>
    <SwipableMenu />
  </header>
)

export default Header