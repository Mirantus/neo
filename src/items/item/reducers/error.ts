import { ItemAction } from "../actions";
import { ITEM_FETCH, ITEM_FETCH_ERROR } from "../constants";

export type ItemErrorStore = string | null;

export const initialState = null;

export default (state: ItemErrorStore = initialState, action: ItemAction): ItemErrorStore => {
    switch (action.type) {
        case ITEM_FETCH:
            return initialState;

        case ITEM_FETCH_ERROR:
            return action.payload;

        default:
            return state;
    }
};
