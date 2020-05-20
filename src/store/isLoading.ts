import { ERROR, OK } from "./constants";

export type IsLoadingStore = boolean;

export const initialState = false;

export default (ACTION_TYPE: string) => (state: IsLoadingStore = initialState, action: any): IsLoadingStore => {
    switch (action.type) {
        case ACTION_TYPE:
            return true;
        case ACTION_TYPE + OK:
        case ACTION_TYPE + ERROR:
            return initialState;
        default:
            return state;
    }
};
