import { makeAutoObservable, runInAction, set } from "mobx";
import { ErrorStore, IsLoadingStore, Item } from "types";

import { appFetch } from "../../../utils/api";
import store from "../../index";

export type ItemsDeleteSubmit = {
    pending: IsLoadingStore;
    error: ErrorStore;
    settled: boolean;
    deleteItem: (id: string) => void;
};

export class ItemsDeleteSubmitStore {
    pending: ItemsDeleteSubmit["pending"] = false;

    error: ItemsDeleteSubmit["error"] = null;

    settled: ItemsDeleteSubmit["settled"] = false;

    constructor() {
        makeAutoObservable(this);
    }

    deleteItem: ItemsDeleteSubmit["deleteItem"] = async (id: string) => {
        appFetch(
            {
                data: { id },
                global: true,
                method: "POST",
                url: "items/delete",
                okFactory: (deleteItem: Item) => {
                    runInAction(() => {
                        const itemsList = store.items.list.init;
                        set(
                            itemsList,
                            "data",
                            itemsList.data.filter((item: Item) => item.id !== deleteItem.id)
                        );
                    });
                },
            },
            this
        );
    };
}
