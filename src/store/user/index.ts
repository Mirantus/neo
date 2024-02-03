import { makeAutoObservable } from "mobx";

import { AuthStore } from "./auth";
import { ChangePasswordStore } from "./changePassword";
import { UserEditStore } from "./edit";
import { LoginStore } from "./login";
import { PasswordRecoveryStore } from "./passwordRecovery";
import { ProfileStore } from "./profile";
import { RegisterStore } from "./register";

export class UserStore {
    auth = new AuthStore();

    changePassword = new ChangePasswordStore();

    edit = new UserEditStore();

    login = new LoginStore();

    passwordRecovery = new PasswordRecoveryStore();

    profile = new ProfileStore();

    register = new RegisterStore();

    constructor() {
        makeAutoObservable(this);
    }
}
