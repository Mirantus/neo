import { combineReducers } from "redux";

import auth, { IAuthStore } from "./auth/reducers";
import edit, { IUserEditStore } from "./edit/reducers";
import login, { ILoginStore } from "./login/reducers";
import profile, { IUserProfileStore } from "./profile/reducers";
import register, { IRegisterStore } from "./register/reducers";

export interface IUserStore {
    auth: IAuthStore;
    edit: IUserEditStore;
    login: ILoginStore;
    profile: IUserProfileStore;
    register: IRegisterStore;
}

export default combineReducers({ auth, edit, login, profile, register });
