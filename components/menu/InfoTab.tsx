import { Avatar } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import Logo from "./Logo"



const InfoTab = (): JSX.Element => (
    <div
        className="infoTab"

    >
        <div className="avatar-container">

            <Avatar >
                <Image alt="Paolo Minopoli" src="https://paolominopoli.vercel.app/avatar-paolo.png" layout="fill" />
            </Avatar>
        </div>
        <span style={{ marginTop: "10px" }}> <Logo ></Logo></span>

    </div>
)

export default InfoTab