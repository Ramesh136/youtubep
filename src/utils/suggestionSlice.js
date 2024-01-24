import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
    name : 'suggestion',
    initialState : {},
    reducers : {
        
        cacheResults : (state , action)=>{
            state = Object.assign(state , action.payload)
        }


    }
})

export const {cacheResults} = suggestionSlice.actions

export default suggestionSlice.reducer