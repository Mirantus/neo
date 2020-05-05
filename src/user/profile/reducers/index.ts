import { User } from "../../../types";
import { AuthAction } from "../../auth/actions";
import { AUTH_OK } from "../../auth/constants";
import { USER_EDIT_OK } from "../../edit/constants";
import { LoginAction } from "../../login/actions";
import { LOGIN_OK } from "../../login/constants";
import { RegisterAction } from "../../register/actions";
import { REGISTER_OK } from "../../register/constants";

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
        case AUTH_OK:
        case LOGIN_OK:
        case REGISTER_OK:
        case USER_EDIT_OK:
            return action.payload;

        default:
            return state;
    }
};
