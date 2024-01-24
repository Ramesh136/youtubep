import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import suggestionSlice from "./suggestionSlice.js";

const store = configureStore({
    reducer :{
        app :appSlice,
        suggestion: suggestionSlice 
    }
})

export default store 