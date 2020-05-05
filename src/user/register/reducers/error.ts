import { RegisterAction } from "../actions";
import { REGISTER, REGISTER_ERROR } from "../constants";

export type RegisterErrorStore = string | null;

export const initialState = null;

export default (state: RegisterErrorStore = initialState, action: RegisterAction): RegisterErrorStore => {
    switch (action.type) {
        case REGISTER:
            return initialState;

        case REGISTER_ERROR:
            return action.payload;

        default:
            return state;
    }
};
