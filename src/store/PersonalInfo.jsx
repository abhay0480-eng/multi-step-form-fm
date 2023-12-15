import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personelInfo:{ name:"",
    email:"",
    phoneNumber:""   
    }
}

const infoSlice = createSlice({
    name:"info",
    initialState,
    reducers:{
        getinfo:(state,action) => {
            state.personelInfo = action.payload
           
        }
    }
})


export const {getinfo} = infoSlice.actions

export default infoSlice.reducer