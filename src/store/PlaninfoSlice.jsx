import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    plan:""
}

const planInfoSlice = createSlice({
    name:"planInfo",
    initialState,
    reducers:{
        getPlanInfo:(state,action) => {
            state.plan = action.payload
           
        }
    }
})


export const {getPlanInfo} = planInfoSlice.actions

export default planInfoSlice.reducer