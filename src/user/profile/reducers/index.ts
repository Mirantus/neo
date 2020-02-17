import { IUser } from "../../../types";
import { IRegisterAction } from "../../register/actions";
import { REGISTER_OK } from "../../register/constants";

export type IUserProfileStore = IUser;

export const initialState: IUserProfileStore = {
    email: "",
};

export default (state: IUserProfileStore = initialState, action: IRegisterAction): IUserProfileStore => {
    switch (action.type) {
        case REGISTER_OK:
            return action.payload;

        default:
            return state;
    }
};
