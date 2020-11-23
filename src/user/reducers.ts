import { combineReducers } from "redux";

import auth, { AuthStore } from "./auth/reducers";
import changePassword, { ChangePasswordStore } from "./changePassword/slice";
import edit, { UserEditStore } from "./edit/slice";
import login, { LoginStore } from "./login/slice";
import passwordRecovery, { PasswordRecoveryStore } from "./passwordRecovery/slice";
import profile, { UserProfileStore } from "./profile/reducers";
import register, { RegisterStore } from "./register/slice";

export interface UserStore {
    auth: AuthStore;
    changePassword: ChangePasswordStore;
    edit: UserEditStore;
    login: LoginStore;
    passwordRecovery: PasswordRecoveryStore;
    profile: UserProfileStore;
    register: RegisterStore;
}

export default combineReducers({ auth, changePassword, edit, login, passwordRecovery, profile, register });
