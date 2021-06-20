import { combineReducers } from "redux";

import auth, { AuthStore } from "./auth/reducers";
import changePassword, { ChangePasswordStore } from "./changePassword/reducers";
import edit, { UserEditStore } from "./edit/reducers";
import login, { LoginStore } from "./login/reducers";
import passwordRecovery, { PasswordRecoveryStore } from "./passwordRecovery/reducers";
import profile, { UserProfileStore } from "./profile/reducers";
import register, { RegisterStore } from "./register/reducers";

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
