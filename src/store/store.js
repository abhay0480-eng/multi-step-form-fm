import { configureStore } from "@reduxjs/toolkit";
import StepSlice from "./StepSlice";
import infoSlice from'./PersonalInfo'
import PlaninfoSlice from "./PlaninfoSlice";
import AddOnsSlice from "./AddOnsSlice";

const store = configureStore({
    reducer:{
        steps: StepSlice,
        info:infoSlice,
        planInfo:PlaninfoSlice,
        addOns: AddOnsSlice
    }
})

export default store