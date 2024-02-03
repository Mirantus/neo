import { makeAutoObservable } from "mobx";
import { Item as ItemType, ErrorStore, IsLoadingStore } from "types";

import { appFetch } from "../../../utils/api";

export type Item = {
    data: ItemType | null;
    pending: IsLoadingStore;
    error: ErrorStore;
    fetchItem: (id: string) => void;
};

export class ItemInitStore {
    data: Item["data"] = null;

    pending: Item["pending"] = false;

    error: Item["error"] = null;

    constructor() {
        makeAutoObservable(this);
    }

    fetchItem: Item["fetchItem"] = async (id) => {
        appFetch({ url: "items/item?id=" + id }, this);
    };
}
