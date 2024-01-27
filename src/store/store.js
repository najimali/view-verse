import { configureStore } from '@reduxjs/toolkit';
import sideBarSlice from './sideBarSlice';
import liveChatSlice from './liveChatSlice';

export const store = configureStore({
    reducer: {
        sideBar: sideBarSlice,
        liveChat: liveChatSlice
    },
});