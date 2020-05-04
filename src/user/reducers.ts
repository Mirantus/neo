import { combineReducers } from "redux";

import auth, { IAuthStore } from "./auth/reducers";
import changePassword, { IChangePasswordStore } from "./changePassword/reducers";
import edit, { IUserEditStore } from "./edit/reducers";
import login, { ILoginStore } from "./login/reducers";
import passwordRecovery, { IPasswordRecoveryStore } from "./passwordRecovery/reducers";
import profile, { IUserProfileStore } from "./profile/reducers";
import register, { IRegisterStore } from "./register/reducers";

export interface IUserStore {
    auth: IAuthStore;
    changePassword: IChangePasswordStore;
    edit: IUserEditStore;
    login: ILoginStore;
    passwordRecovery: IPasswordRecoveryStore;
    profile: IUserProfileStore;
    register: IRegisterStore;
}

export default combineReducers({ auth, changePassword, edit, login, passwordRecovery, profile, register });
