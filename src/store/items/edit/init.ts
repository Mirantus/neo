import { makeAutoObservable } from "mobx";
import { ErrorStore, IsLoadingStore } from "types";

import { Item } from "../../../types";
import { appFetch } from "../../../utils/api";

export type ItemsEditInit = {
    data: Item | null;
    pending: IsLoadingStore;
    error: ErrorStore;
    settled: boolean;
    itemsEditInit: (id: string) => void;
};

export class ItemsEditInitStore {
    data: ItemsEditInit["data"] = null;

    pending: ItemsEditInit["pending"] = false;

    error: ItemsEditInit["error"] = null;

    settled: ItemsEditInit["settled"] = false;

    constructor() {
        makeAutoObservable(this);
    }

    itemsEditInit: ItemsEditInit["itemsEditInit"] = (id) => {
        appFetch({ url: "items/item?id=" + id }, this);
    };
}
