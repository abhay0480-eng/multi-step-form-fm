import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addons:[]
}

const AddOnsSlice = createSlice({
    name:"addOns",
    initialState,
    reducers:{
        getAddOns:(state,action) => {
            state.addons = [action.payload]
           
        }
    }
})


export const {getAddOns} = AddOnsSlice.actions

export default AddOnsSlice.reducer