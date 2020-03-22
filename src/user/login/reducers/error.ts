import { ILoginAction } from "../actions";
import { LOGIN, LOGIN_ERROR } from "../constants";

export type ILoginErrorStore = string | null;

export const initialState = null;

export default (state: ILoginErrorStore = initialState, action: ILoginAction): ILoginErrorStore => {
    switch (action.type) {
        case LOGIN:
            return initialState;

        case LOGIN_ERROR:
            return action.payload;

        default:
            return state;
    }
};
