import { ListAction } from "../actions";
import { ITEMS_FETCH, ITEMS_FETCH_ERROR } from "../constants";

export type ListErrorStore = string | null;

export const initialState = null;

export default (state: ListErrorStore = initialState, action: ListAction): ListErrorStore => {
    switch (action.type) {
        case ITEMS_FETCH:
            return initialState;

        case ITEMS_FETCH_ERROR:
            return action.payload;

        default:
            return state;
    }
};
