import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface CartState{

    data:any[],
    info:any[]
}

const initialState: CartState ={

    data:[],
    info:[]
};


const cartSlice = createSlice({
name: "cart",
initialState,
reducers:{

    setData: (state,{payload})=>({
        ...state,
        data:payload
    }),
    setInfo: (state,{payload})=>({
        ...state,
        info:payload
    })
}


});

export const {setData,setInfo} = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default cartSlice.reducer

