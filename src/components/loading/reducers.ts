import { ActionLoading } from "./actions";
import { LOADING_HIDE, LOADING_SHOW } from "./constants";

export type LoadingStore = boolean;

export const initialState = false;

export default (state: LoadingStore = initialState, action: ActionLoading): LoadingStore => {
    switch (action.type) {
        case LOADING_HIDE:
            return false;

        case LOADING_SHOW:
            return true;

        default:
            return state;
    }
};
