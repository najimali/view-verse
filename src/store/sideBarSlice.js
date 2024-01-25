import { createSlice } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
    name: "sideBarSlice",
    initialState: {
        isSideBarOpen: true
    },
    reducers: {
        toggleSideBar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen
        },
        closeSideBar: (state) => {
            state.isSideBarOpen = false
        }
    }
})

export const { toggleSideBar, closeSideBar } = sideBarSlice.actions
export default sideBarSlice.reducer