import { IActionLoading } from "./actions";
import { LOADING_HIDE, LOADING_SHOW } from "./constants";

export type ILoadingStore = boolean;

export const initialState = false;

export default (state: ILoadingStore = initialState, action: IActionLoading): ILoadingStore => {
    switch (action.type) {
        case LOADING_HIDE:
            return false;

        case LOADING_SHOW:
            return true;

        default:
            return state;
    }
};
