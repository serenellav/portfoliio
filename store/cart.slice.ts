import { createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

interface CartState{

    data:any[]
}

const initialState: CartState ={

    data:[]
};


const cartSlice = createSlice({
name: "cart",
initialState,
reducers:{

    setData: (state,{payload})=>({
        ...state,
        data:payload
    })
}


});

export const {setData} = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default cartSlice.reducer

