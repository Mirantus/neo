import { combineReducers } from "redux";

import auth, { IUserAuthStore } from "./auth/reducers";
import login, { ILoginStore } from "./login/reducers";
import profile, { IUserProfileStore } from "./profile/reducers";
import register, { IRegisterStore } from "./register/reducers";

export interface IUserStore {
    auth: IUserAuthStore;
    login: ILoginStore;
    profile: IUserProfileStore;
    register: IRegisterStore;
}

export default combineReducers({ auth, login, profile, register });
