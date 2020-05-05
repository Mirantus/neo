import { ItemAction } from "../actions";
import { ITEM_FETCH, ITEM_FETCH_ERROR, ITEM_FETCH_OK } from "../constants";

export type ItemIsFetchingStore = boolean;

export const initialState = false;

export default (state: ItemIsFetchingStore = initialState, action: ItemAction): ItemIsFetchingStore => {
    switch (action.type) {
        case ITEM_FETCH:
            return true;

        case ITEM_FETCH_OK:
        case ITEM_FETCH_ERROR:
            return initialState;

        default:
            return state;
    }
};
