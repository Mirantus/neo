import { combineReducers } from "redux";

import auth, { IUserAuthStore } from "./auth/reducers";
import profile, { IUserProfileStore } from "./profile/reducers";
import register, { IRegisterStore } from "./register/reducers";

export interface IUserStore {
    auth: IUserAuthStore;
    profile: IUserProfileStore;
    register: IRegisterStore;
}

export default combineReducers({ auth, profile, register });
