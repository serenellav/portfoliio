import React from "react";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import { GetStaticPropsResult } from "next";



interface Props {
   
		post?: any[],

}


const SwipableMenu: React.FC<Props> = ({ post }) => {

    const [open, setOpen] = React.useState(false)

    return (
        <>
            <MenuRoundedIcon
                sx={{ color: "#fff", fontSize: 35 }}
                className="menu"
                onClick={() => setOpen(true)}
            ></MenuRoundedIcon >

            <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <div
                    onClick={() => setOpen(false)}
                    className="close-menu">
                    <ArrowCircleLeftOutlinedIcon
                        sx={{ color: "#fff", fontSize: 35 }}
                        className="menu"
                        onClick={() => setOpen(true)}
                    ></ArrowCircleLeftOutlinedIcon ></div>
            </SwipeableDrawer>

        </>
    );
}



export default SwipableMenu;