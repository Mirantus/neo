import { OK } from "../../../store/constants";
import { User } from "../../../types";
import { AuthAction } from "../../auth/actions";
import { AUTH } from "../../auth/constants";
import { USER_EDIT } from "../../edit/constants";
import { LoginAction } from "../../login/actions";
import { LOGIN } from "../../login/constants";
import { RegisterAction } from "../../register/actions";
import { REGISTER } from "../../register/constants";

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
        case AUTH + OK:
        case LOGIN + OK:
        case REGISTER + OK:
        case USER_EDIT + OK:
            return action.payload;

        default:
            return state;
    }
};
