import { ERROR, INIT } from "./constants";

export type ErrorStore = string | null;

export const initialState = null;

export default (ACTION_TYPE: string) => (state: ErrorStore = initialState, action: any): ErrorStore => {
    switch (action.type) {
        case ACTION_TYPE:
        case ACTION_TYPE + INIT:
            return initialState;

        case ACTION_TYPE + ERROR:
            return action.payload;

        default:
            return state;
    }
};
