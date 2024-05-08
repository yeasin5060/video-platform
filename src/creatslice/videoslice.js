import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loding : false,
    isError : false,
    error : "",
    data : []
}


export const videoSlice = createSlice({
    name : "video",
    initialState,

})
export default videoSlice.reducer