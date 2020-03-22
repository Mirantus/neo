import { IUser } from "../../../types";
import { ILoginAction } from "../../login/actions";
import { LOGIN_OK } from "../../login/constants";
import { IRegisterAction } from "../../register/actions";
import { REGISTER_OK } from "../../register/constants";

export type IUserProfileStore = IUser;

export const initialState: IUserProfileStore = {
    email: "",
};

export default (state: IUserProfileStore = initialState, action: ILoginAction | IRegisterAction): IUserProfileStore => {
    switch (action.type) {
        case LOGIN_OK:
            return action.payload;

        case REGISTER_OK:
            return action.payload;

        default:
            return state;
    }
};
