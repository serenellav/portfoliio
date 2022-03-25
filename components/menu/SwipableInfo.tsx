import React from "react";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Avatar from '@mui/material/Avatar';



interface Props {
  

}


const SwipableInfo: React.FC<Props> = ({ }) => {

    const [open,setOpen] = React.useState(false)
    
    return (
 <>
 <Avatar
 alt="Dario Vettura" src="./vett7.png" 
 sx={{ color: "#fff",fontSize: 35  }}
 className="map"
 onClick={()=>setOpen(true)}
 ></Avatar>
 
<SwipeableDrawer
anchor="right"
open={open}
onClose={()=>setOpen(false)}
onOpen={()=>setOpen(true)}
>
<div 
onClick={()=>setOpen(false)}
className="close-map"> <ArrowCircleRightOutlinedIcon 
sx={{ color: "#fff",fontSize: 35  }}
className="map"
onClick={()=>setOpen(true)}
></ArrowCircleRightOutlinedIcon></div>
</SwipeableDrawer>

 </>
    );
}

export default SwipableInfo;