import { IRegisterAction } from "../actions";
import { REGISTER, REGISTER_ERROR, REGISTER_OK } from "../constants";

export type IRegisterIsSubmittingStore = boolean;

export const initialState = false;

export default (
    state: IRegisterIsSubmittingStore = initialState,
    action: IRegisterAction
): IRegisterIsSubmittingStore => {
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
