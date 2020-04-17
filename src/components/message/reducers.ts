import { IMessage } from "../../types";
import { IActionMessage } from "./actions";
import { MESSAGE_HIDE, MESSAGE_SHOW } from "./constants";

export const initialState: IMessage = {
    text: "",
    type: "info",
};

export type IMessageStore = IMessage;

export default (state: IMessageStore = initialState, action: IActionMessage): IMessageStore => {
    switch (action.type) {
        case MESSAGE_HIDE:
            return initialState;

        case MESSAGE_SHOW:
            return action.payload || initialState;

        default:
            return state;
    }
};
