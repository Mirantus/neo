import { makeAutoObservable } from "mobx";

import { ItemsStore } from "./items";
import { MessageStore } from "./message";
import { UserStore } from "./user";

export class Store {
    items = new ItemsStore();

    message = new MessageStore();

    user = new UserStore();

    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    loadingHide = () => (this.loading = false);

    loadingShow = () => (this.loading = true);
}

export default new Store();
