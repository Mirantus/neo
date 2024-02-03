import { makeAutoObservable } from "mobx";

import { ItemsListInitStore } from "./init";

export class ItemsListStore {
    init = new ItemsListInitStore();

    constructor() {
        makeAutoObservable(this);
    }
}
