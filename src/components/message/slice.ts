import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Message } from "../../types";

export type MessageStore = Message;

export const initialState: Message = {
    text: "",
    type: "info",
};

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        messageHide: () => initialState,
        messageShow: {
            reducer: (state: MessageStore, action: PayloadAction<Message>) => action.payload || initialState,
            prepare: (text: string, type = "info") => ({
                payload: { text, type },
            }),
        },
    },
});

export const { messageHide, messageShow } = messageSlice.actions;

export default messageSlice.reducer;
