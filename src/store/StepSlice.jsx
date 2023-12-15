import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stepCount: 1    
}

const stepSlice = createSlice({
    name:"steps",
    initialState,
    reducers:{
        getStepCount:(state,action) => {
            state.stepCount = action.payload
        }
    }
})


export const {getStepCount} = stepSlice.actions

export default stepSlice.reducer



// localStorage.setItem('getVanList', JSON.stringify(action.payload));