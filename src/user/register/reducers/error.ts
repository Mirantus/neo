import { IRegisterAction } from "../actions";
import { REGISTER, REGISTER_ERROR } from "../constants";

export type IRegisterErrorStore = string | null;

export const initialState = null;

export default (state: IRegisterErrorStore = initialState, action: IRegisterAction): IRegisterErrorStore => {
    switch (action.type) {
        case REGISTER:
            return initialState;

        case REGISTER_ERROR:
            return action.payload;

        default:
            return state;
    }
};
