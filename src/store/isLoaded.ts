import { ERROR, INIT, OK } from "./constants";

export type IsLoadedStore = boolean;

export const initialState = false;

export default (ACTION_TYPE: string) => (state: IsLoadedStore = initialState, action: any): IsLoadedStore => {
    switch (action.type) {
        case ACTION_TYPE:
        case ACTION_TYPE + INIT:
            return false;

        case ACTION_TYPE + ERROR:
        case ACTION_TYPE + OK:
            return true;

        default:
            return state;
    }
};
