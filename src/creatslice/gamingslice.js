import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { gamingVideo } from "../component/getvieos/gamingvideo";

const initialState = {
    loding : false,
    isError : false,
    error : " ",
    gmvideo : []
}

export const fetchGamingVideo = createAsyncThunk("fatchgamingvideo",async()=>{
    const res = await gamingVideo()
    return res
})

export const gamingvideoslice = createSlice({
    name : "gamingvideo",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchGamingVideo.pending,(state)=>{
            state.loding = true
        })
        .addCase(fetchGamingVideo.fulfilled,(state , action)=>{
            state.loding = false
            state.gmvideo = action.payload
        })
        .addCase(fetchGamingVideo.rejected,(state , action)=>{
            state.loding = false
            state.gmvideo = []
            state.isError = action.error.message
        })
    }
})

export default gamingvideoslice.reducer