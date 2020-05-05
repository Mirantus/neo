import { RegisterAction } from "../actions";
import { REGISTER, REGISTER_ERROR, REGISTER_OK } from "../constants";

export type RegisterIsSubmittingStore = boolean;

export const initialState = false;

export default (state: RegisterIsSubmittingStore = initialState, action: RegisterAction): RegisterIsSubmittingStore => {
    switch (action.type) {
        case REGISTER:
            return true;
        case REGISTER_OK:
        case REGISTER_ERROR:
            return initialState;
        default:
            return state;
    }
};
