import { configureStore } from '@reduxjs/toolkit';
import sideBarReducer from './sideBarSlice';

export const store = configureStore({
    reducer: {
        sideBar: sideBarReducer
    },
});