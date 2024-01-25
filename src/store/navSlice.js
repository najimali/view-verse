import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
    name: "navSlice",
    initialState: {
        isSideBarOpen: true
    },
    reducers: {
        toggleSideBar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen
        }
    }
})

export const { toggleSideBar } = navSlice.actions
export default navSlice.reducer