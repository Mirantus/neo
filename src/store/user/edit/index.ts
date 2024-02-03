import { makeAutoObservable } from "mobx";

import { UserEditSubmitStore } from "./submit";

export class UserEditStore {
    submit = new UserEditSubmitStore();

    constructor() {
        makeAutoObservable(this);
    }
}
