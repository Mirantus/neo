import { makeAutoObservable } from "mobx";

import { ItemsEditInitStore } from "./init";
import { ItemsEditSubmitStore } from "./submit";

export class ItemsEditStore {
    init = new ItemsEditInitStore();

    submit = new ItemsEditSubmitStore();

    constructor() {
        makeAutoObservable(this);
    }
}
