import { makeAutoObservable } from "mobx";

import { LoginSubmitStore } from "./submit";

export class LoginStore {
    submit = new LoginSubmitStore();

    constructor() {
        makeAutoObservable(this);
    }
}
