import { combineReducers } from "redux";

import auth, { IUserAuthStore } from "./auth/reducers";

export interface IUserStore {
    auth: IUserAuthStore;
}

export default combineReducers({ auth });
