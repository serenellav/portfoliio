import React from "react";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { GetStaticPropsResult } from "next";

import { Avatar, Button } from "@mui/material";
import { Rings } from "react-loader-spinner";



interface Props {
   
		embed?: string,

}


const Swipe3DModel: React.FC<Props> = ({ embed="" }) => {

    const [open, setOpen] = React.useState(false)

    return (
        <>
            {/* <MenuRoundedIcon
                sx={{ color: "#fff", fontSize: 35 }}
                className="menu"
                onClick={() => setOpen(true)}
            ></MenuRoundedIcon > */}
             <Button startIcon={<ViewInArIcon/>} className="open-model-btn" onClick={() => setOpen(true)}>SEE IN ACTION</Button>

            <SwipeableDrawer
           className="model-swipe"
                anchor="bottom"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <div
                    onClick={() => setOpen(false)}
                    className="close-menu">
                    <ArrowCircleDownRoundedIcon
                        sx={{ color: "#fff", fontSize: 35 }}
                        className="menu"
                        onClick={() => setOpen(true)}
                    ></ArrowCircleDownRoundedIcon ></div>
                    <span style={{marginTop:"20px"}}></span>
                    <Rings  wrapperClass="loader" color="#008069" ariaLabel="loading-indicator" />
                    <div className='sk-frame-wrapper'   dangerouslySetInnerHTML={{__html: embed}} />
            </SwipeableDrawer>

        </>
    );
}



export default Swipe3DModel;