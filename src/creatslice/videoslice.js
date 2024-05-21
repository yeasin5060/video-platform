import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allVideo } from "../component/getvieos/allvideo";

const initialState = {
    loding : false,
    isError : false,
    error : "",
    data : []
}

export const fetchAllVideo = createAsyncThunk("fetchAllvideo" , async({tage , searchs})=>{
    let res = await allVideo({tage , searchs})
    return res
})

export const videoSlice = createSlice({
    name : "video",
    initialState,
    extraReducers:(builder)=>{
            builder.addCase(fetchAllVideo.pending,(state)=>{
                state.loding = true
            })
            .addCase(fetchAllVideo.fulfilled,(state,action)=>{
                state.loding = false
                state.data = action.payload
            })
            .addCase(fetchAllVideo.rejected,(state, action)=>{
                state.loding = false
                state.data = []
                state.isError = true
                state.error = action.error.message
            })
    }


})
export default videoSlice.reducer