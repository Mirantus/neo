import { RegisterAction } from "../actions";
import { REGISTER, REGISTER_ERROR, REGISTER_INIT, REGISTER_OK } from "../constants";

export type RegisterIsSubmittedStore = boolean;

export const initialState = false;

export default (state: RegisterIsSubmittedStore = initialState, action: RegisterAction): RegisterIsSubmittedStore => {
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
