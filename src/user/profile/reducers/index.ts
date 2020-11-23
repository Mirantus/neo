import { User } from "../../../types";
import { auth, AuthAction } from "../../auth/actions";
import { submit } from "../../edit/slice";
import { login, LoginAction } from "../../login/slice";
import { register, RegisterAction } from "../../register/slice";

export type UserProfileStore = User;

export const initialState: UserProfileStore = {
    email: "",
    id: "",
};

export default (
    state: UserProfileStore = initialState,
    action: AuthAction | LoginAction | RegisterAction
): UserProfileStore => {
    switch (action.type) {
        case auth.fulfilled.type:
        case login.fulfilled.type:
        case register.fulfilled.type:
        case submit.fulfilled.type:
            return action.payload;

        default:
            return state;
    }
};
