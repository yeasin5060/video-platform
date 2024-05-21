import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tage : [],
    searchs : ""
}

export const filterSlice = createSlice({
    name : "filter",
    initialState,
    reducers : {
        addTage : ( state , action)=>{
            state.tage.push(action.payload)
        },
        removeTage: ( state , action)=>{
            state.tage = state.tage.filter((tag) => tag !== action.payload) 
        },
        searchTage : ( state, action)=>{
           if(action.payload){
                state.searchs += action.payload
           }else{
            state.searchs = ""
           }
        }
    }
})

export const { addTage , removeTage , searchTage} =  filterSlice.actions
export default filterSlice.reducer