import { IMessage } from "../../types";
import { MESSAGE_HIDE, MESSAGE_SHOW } from "./constants";

export interface IActionMessage {
    type: string;
    payload?: IMessage;
}

export const messageHide = () => ({
    type: MESSAGE_HIDE,
});

export const messageShow = (text: string, type: string = "info") => ({
    payload: { text, type },
    type: MESSAGE_SHOW,
});
