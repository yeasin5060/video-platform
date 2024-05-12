import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { lofiVideo } from "../component/getvieos/lofivideo";

const initialState = {
    loding : false,
    isEerror : false,
    error : false,
    lofidata : []
}

export const fetchlofiVideo = createAsyncThunk("lofivideo",async()=>{
    const res = await lofiVideo()
    return res
})

export const lofiSlice = createSlice({
    name : "lofivideo",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchlofiVideo.pending,(state)=>{
            state.loding = true;
        })
        .addCase(fetchlofiVideo.fulfilled,(state , action)=>{
            state.loding = false;
            state.lofidata = action.payload;
        })
        .addCase(fetchlofiVideo.rejected,(state , action)=>{
            state.loding = false;
            state.lofidata = [];
            state.isEerror = action.error.message
        })
    }
})

export default lofiSlice.reducer