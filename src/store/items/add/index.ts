import { makeAutoObservable } from "mobx";

import { ItemsAddSubmitStore } from "./submit";

export class ItemsAddStore {
    submit = new ItemsAddSubmitStore();

    constructor() {
        makeAutoObservable(this);
    }
}
