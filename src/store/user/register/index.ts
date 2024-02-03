import { makeAutoObservable } from "mobx";

import { User } from "../../../types";

import { RegisterSubmitStore } from "./submit";

export type Register = {
    isAuthorized: boolean;
    auth: (profile: User) => void;
    logout: () => void;
};

export class RegisterStore {
    submit = new RegisterSubmitStore();

    constructor() {
        makeAutoObservable(this);
    }
}
