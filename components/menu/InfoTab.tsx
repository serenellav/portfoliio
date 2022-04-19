import { Avatar } from "@mui/material"
import Link from "next/link"
import Logo from "./Logo"



const InfoTab = (): JSX.Element => (
    <div
    className="infoTab"
  
    >
        <div className="avatar-container">
       <Avatar alt="Paolo Minopoli" src="./avatar-paolo.png" />
       </div>
       <span style={{marginTop:"10px"}}> <Logo ></Logo></span>
    
    </div>
)

export default InfoTab