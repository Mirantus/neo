import { IRegisterAction } from "../actions";
import { REGISTER, REGISTER_ERROR, REGISTER_INIT, REGISTER_OK } from "../constants";

export type IRegisterIsSubmittedStore = boolean;

export const initialState = false;

export default (
    state: IRegisterIsSubmittedStore = initialState,
    action: IRegisterAction
): IRegisterIsSubmittedStore => {
    switch (action.type) {
        case REGISTER_INIT:
        case REGISTER:
            return false;
        case REGISTER_OK:
        case REGISTER_ERROR:
            return true;
        default:
            return state;
    }
};
