import { Message } from "../../types";

import { MESSAGE_HIDE, MESSAGE_SHOW } from "./constants";

export interface ActionMessage {
    type: string;
    payload?: Message;
}

export const messageHide = () => ({
    type: MESSAGE_HIDE,
});

export const messageShow = (text: string, type = "info") => ({
    payload: { text, type },
    type: MESSAGE_SHOW,
});
