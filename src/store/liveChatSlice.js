import { createSlice } from "@reduxjs/toolkit";
import { MAX_VISIBLE_LIVE_CHAT_COUNT } from "../utils/constants";

const liveChatSlice = createSlice({
    name: "liveChat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, actions) => {

            state.messages.push(actions.payload)
            if (state.messages.length > MAX_VISIBLE_LIVE_CHAT_COUNT) {
                state.messages.shift();
            }
        }
    }
})
export const { addMessage } = liveChatSlice.actions
export default liveChatSlice.reducer