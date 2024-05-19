import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { singlevideo } from "../component/getvieos/singlevideo";

const initialState = {
    loding : false,
    isError : false,
    error : false,
    data : {}
}


export const fetchSingleVideo = createAsyncThunk("fetchsinglevideo" , async(id)=>{
    let res = await singlevideo(id);
    return res;
})

export const singleVideoSlice = createSlice ({
    name : "singlevideo",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchSingleVideo.pending,(state)=>{
            state.loding = true;
        })
        .addCase(fetchSingleVideo.fulfilled,(state , action)=>{
            state.loding = false;
            state.data = action.payload;
        })
        .addCase(fetchSingleVideo.rejected,(state , action)=>{
            state.loding = false;
            state.data = {};
            state.isError = true;
            state.error = action.error.message;
        })
    }
})

export default singleVideoSlice.reducer