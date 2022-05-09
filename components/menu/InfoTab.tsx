import { Avatar } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { cartSelector } from "../../store/cart.slice"
import { useAppSelector } from "../../store/hooks"
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Logo from "./Logo"

interface Props {


}
const InfoTab: React.FC<Props> = ({ }) => {


    const { info } = useAppSelector(cartSelector)


    return <div
        className="infoTab" >
        <div className="avatar-container">

            <Avatar >
                <Image alt="daddario" src="https://serenellavezzi.vercel.app/vett7.png" layout="fill" />
            </Avatar>
        </div>
        <span style={{ marginTop: "10px" }}> <Logo ></Logo></span>
        <div style={{ display: "flex",  marginTop: "10px" }}>

            <Link  href={info[0]?.acf.instagram ? info[0]?.acf.instagram : "/"} >
                <InstagramIcon className="social-link-icon"  />
            </Link>
            <Link  href={info[0]?.acf.linkedin ? info[0]?.acf.linkedin : "/"}>
                <LinkedInIcon className="social-link-icon" ></LinkedInIcon>
            </Link>
            <Link   href={info[0]?.acf.email ? info[0]?.acf.email : "/"}>
                <MailOutlineRoundedIcon className="social-link-icon" ></MailOutlineRoundedIcon>
            </Link>
        </div>


        <div style={{ padding: "18px", marginTop: "0px" }} className='post-content-container' dangerouslySetInnerHTML={{ __html: info[0]?.content.rendered }} />

    </div>
}

export default InfoTab