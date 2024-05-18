import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tages } from "../component/getvieos/tages";

const initialState = {
    loding : false,
    isError : false ,
    error : false,
    data : []
}

export const fetchTage = createAsyncThunk("feathtage" , async()=>{
    let res = await tages()
    return res
})

export const allTage = createSlice({
    name : "tage",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchTage.pending,(state)=>{
            state.loding = true;
        })
        .addCase(fetchTage.fulfilled,(state , action)=>{
            state.loding = false;
            state.data = action.payload
        })
        .addCase(fetchTage.rejected,(state , action)=>{
            state.loding = false
            state.data = []
            state.isError = true
            state.error = action.error.message
        })
    }
})

export default allTage.reducer