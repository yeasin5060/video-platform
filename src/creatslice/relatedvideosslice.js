import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { relatedVideo } from "../component/getvieos/relatedvideo";

const initialState = {
    loding : false,
    isError : false,
    error : false,
    data : {}
}

export const fetchRelatedVideo = createAsyncThunk("allvideo/fetchrelatedvideo" ,async({tage , id})=>{
    let res = await relatedVideo({tage , id})
   return res
})

export const relatedVideoSlice = createSlice({
    name : "relatedvideo",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchRelatedVideo .pending,(state)=>{
            state.loding = true;
        })
        .addCase(fetchRelatedVideo .fulfilled,(state , action)=>{
            state.loding = false;
            state.data = action.payload
        })
        .addCase(fetchRelatedVideo .rejected,(state , action)=>{
            state.loding = false
            state.data = []
            state.isError = true
            state.error = action.error.message
        })
    }
})

export default relatedVideoSlice .reducer