import { makeAutoObservable } from "mobx";

import { ItemInitStore } from "./init";

export class ItemStore {
    init = new ItemInitStore();

    constructor() {
        makeAutoObservable(this);
    }
}
