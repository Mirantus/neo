import { makeAutoObservable } from "mobx";
import { ErrorStore, IsLoadingStore } from "types";

import { Item } from "../../../types";
import { appFetch } from "../../../utils/api";

export type ItemsAddSubmit = {
    pending: IsLoadingStore;
    error: ErrorStore;
    settled: boolean;
    init: () => void;
    add: (values: Item) => void;
};

export class ItemsAddSubmitStore {
    pending: ItemsAddSubmit["pending"] = false;

    error: ItemsAddSubmit["error"] = null;

    settled: ItemsAddSubmit["settled"] = false;

    constructor() {
        makeAutoObservable(this);
    }

    init: ItemsAddSubmit["init"] = () => {
        this.error = null;
        this.pending = false;
        this.settled = false;
    };

    add: ItemsAddSubmit["add"] = async (values) => {
        appFetch(
            {
                data: values,
                method: "POST",
                url: "items/add",
            },
            this
        );
    };
}
