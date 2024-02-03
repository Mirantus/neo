import { makeAutoObservable } from "mobx";

import { ItemsAddStore } from "./add";
import { ItemsDeleteStore } from "./delete";
import { ItemsEditStore } from "./edit";
import { ItemStore } from "./item";
import { ItemsListStore } from "./list";

export class ItemsStore {
    add = new ItemsAddStore();

    delete = new ItemsDeleteStore();

    edit = new ItemsEditStore();

    item = new ItemStore();

    list = new ItemsListStore();

    constructor() {
        makeAutoObservable(this);
    }
}
