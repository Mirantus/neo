import { makeAutoObservable } from "mobx";
import { Item, ErrorStore, IsLoadingStore } from "types";

import { appFetch } from "../../../utils/api";

export type Items = {
    data: Item[];
    pending: IsLoadingStore;
    error: ErrorStore;
    fetchItems: () => void;
    addItem: (item: string) => void;
};

export class ItemsListInitStore {
    data: Items["data"] = [];

    pending: Items["pending"] = true;

    error: Items["error"] = null;

    constructor() {
        makeAutoObservable(this);
    }

    fetchItems: Items["fetchItems"] = async () => {
        appFetch({ url: "items/" }, this);
    };
}
