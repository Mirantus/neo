import { makeAutoObservable } from "mobx";

import { ItemsDeleteSubmitStore } from "./submit";

export class ItemsDeleteStore {
    submit = new ItemsDeleteSubmitStore();

    constructor() {
        makeAutoObservable(this);
    }
}
