import { makeAutoObservable } from "mobx";

import { PasswordRecoverySubmitStore } from "./submit";

export class PasswordRecoveryStore {
    submit = new PasswordRecoverySubmitStore();

    constructor() {
        makeAutoObservable(this);
    }
}
