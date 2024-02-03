import { makeAutoObservable } from "mobx";
import { ErrorStore, IsLoadingStore } from "types";

import { Item } from "../../../types";
import { appFetch } from "../../../utils/api";

export type ItemsEditSubmit = {
    pending: IsLoadingStore;
    error: ErrorStore;
    settled: boolean;
    itemsEditSubmit: (values: Item) => void;
};

export class ItemsEditSubmitStore {
    pending: ItemsEditSubmit["pending"] = false;

    error: ItemsEditSubmit["error"] = null;

    settled: ItemsEditSubmit["settled"] = false;

    constructor() {
        makeAutoObservable(this);
    }

    itemsEditSubmit: ItemsEditSubmit["itemsEditSubmit"] = async (values) => {
        appFetch(
            {
                data: values,
                method: "POST",
                url: "items/edit",
            },
            this
        );
    };
}
