import { ListAction } from "../actions";
import { ITEMS_FETCH, ITEMS_FETCH_ERROR, ITEMS_FETCH_OK } from "../constants";

export type ListIsFetchingStore = boolean;

export const initialState = false;

export default (state: ListIsFetchingStore = initialState, action: ListAction): ListIsFetchingStore => {
    switch (action.type) {
        case ITEMS_FETCH:
            return true;

        case ITEMS_FETCH_OK:
        case ITEMS_FETCH_ERROR:
            return initialState;

        default:
            return state;
    }
};
