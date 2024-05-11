import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { musicVideo } from "../component/getvieos/musicvideo";

const initialState ={
    loding : false,
    isError : false,
    error : "",
    msdata : []
}

export const fetchMusicVideo = createAsyncThunk("musicvideo",async()=>{
    const res = await musicVideo()
    return res
})

export const musicVideoSlice = createSlice ({
    name : "musicvideo",
    initialState,
    extraReducers : (builder)=>{
        builder.addCase(fetchMusicVideo.pending,(state)=>{
            state.loding = true;
        })
        .addCase(fetchMusicVideo.fulfilled,(state , action)=>{
            state.loding = false;
            state.msdata = action.payload;
        })
        .addCase(fetchMusicVideo.rejected,(state , action)=>{
            state.loding = false;
            state.msdata = [];
            state.isError = true;
            state.error = action.error.message
        })
    }
})
export default musicVideoSlice.reducer
