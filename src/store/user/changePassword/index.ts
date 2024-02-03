import { makeAutoObservable } from "mobx";

import { ChangePasswordSubmitStore } from "./submit";

export class ChangePasswordStore {
    submit = new ChangePasswordSubmitStore();

    constructor() {
        makeAutoObservable(this);
    }
}
