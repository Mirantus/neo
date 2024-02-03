import { makeAutoObservable } from "mobx";

export class ProfileStore {
    email = "";

    id = "";

    constructor() {
        makeAutoObservable(this);
    }
}
