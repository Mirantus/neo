import { makeAutoObservable, runInAction } from "mobx";

export type Message = {
    text: string;
    type: string;
    messageHide: () => void;
    messageShow: (text: string, type: string) => void;
};

export class MessageStore {
    text = "";

    type = "info";

    messageHide: Message["messageHide"] = () => {
        runInAction(() => {
            this.text = "";
            this.type = "info";
        });
    };

    messageShow: Message["messageShow"] = (text, type = "info") => {
        runInAction(() => {
            this.text = text;
            this.type = type;
        });
    };

    constructor() {
        makeAutoObservable(this);
    }
}
