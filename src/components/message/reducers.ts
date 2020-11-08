import { Message } from "../../types";

import { ActionMessage } from "./actions";
import { MESSAGE_HIDE, MESSAGE_SHOW } from "./constants";

export const initialState: Message = {
    text: "",
    type: "info",
};

export type MessageStore = Message;

export default (state: MessageStore = initialState, action: ActionMessage): MessageStore => {
    switch (action.type) {
        case MESSAGE_HIDE:
            return initialState;

        case MESSAGE_SHOW:
            return action.payload || initialState;

        default:
            return state;
    }
};
