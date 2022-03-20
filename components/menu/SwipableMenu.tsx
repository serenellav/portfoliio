import React from "react";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';



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


const SwipableMenu: React.FC<Props> = ({ id, title, category, theme, isSelected ,item}) => {

    const [open,setOpen] = React.useState(false)
    
    return (
 <>
 <MenuRoundedIcon 
 sx={{ color: "#fff",fontSize: 35 }}
 className="menu"
 onClick={()=>setOpen(true)}
 ></MenuRoundedIcon >
 
<SwipeableDrawer
anchor="left"
open={open}
onClose={()=>setOpen(false)}
onOpen={()=>setOpen(true)}
>
<div 
onClick={()=>setOpen(false)}
className="close-menu">X</div>
</SwipeableDrawer>

 </>
    );
}

export default SwipableMenu;