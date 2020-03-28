import { IUser } from "../../../types";
import { IAuthAction } from "../../auth/actions";
import { AUTH_OK } from "../../auth/constants";
import { ILoginAction } from "../../login/actions";
import { LOGIN_OK } from "../../login/constants";
import { IRegisterAction } from "../../register/actions";
import { REGISTER_OK } from "../../register/constants";

export type IUserProfileStore = IUser;

export const initialState: IUserProfileStore = {
    email: "",
};

export default (
    state: IUserProfileStore = initialState,
    action: IAuthAction | ILoginAction | IRegisterAction
): IUserProfileStore => {
    switch (action.type) {
        case AUTH_OK:
        case LOGIN_OK:
        case REGISTER_OK:
            return action.payload;

        default:
            return state;
    }
};
