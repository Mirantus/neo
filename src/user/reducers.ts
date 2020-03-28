import { combineReducers } from "redux";

import auth, { IAuthStore } from "./auth/reducers";
import login, { ILoginStore } from "./login/reducers";
import profile, { IUserProfileStore } from "./profile/reducers";
import register, { IRegisterStore } from "./register/reducers";

export interface IUserStore {
    auth: IAuthStore;
    login: ILoginStore;
    profile: IUserProfileStore;
    register: IRegisterStore;
}

export default combineReducers({ auth, login, profile, register });
