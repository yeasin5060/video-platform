import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "userdetails",
    initialState : {
        value : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    },
    reducers: {
        userdata: (state, action) => {
          state.value = action.payload
        },
    },
})

export const { userdata} = userSlice.actions

export default userSlice.reducer