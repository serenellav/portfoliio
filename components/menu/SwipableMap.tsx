import React from "react";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';



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


const SwipableMap: React.FC<Props> = ({ id, title, category, theme, isSelected ,item}) => {

    const [open,setOpen] = React.useState(false)
    
    return (
 <>
 <LocationOnOutlinedIcon
 sx={{ color: "#fff" }}
 className="map"
 onClick={()=>setOpen(true)}
 ></LocationOnOutlinedIcon>
 
<SwipeableDrawer
anchor="right"
open={open}
onClose={()=>setOpen(false)}
onOpen={()=>setOpen(true)}
>
<div 
onClick={()=>setOpen(false)}
className="close-map">X</div>
</SwipeableDrawer>

 </>
    );
}

export default SwipableMap;