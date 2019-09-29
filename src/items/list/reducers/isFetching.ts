import { IListAction } from "../actions";
import { ITEMS_FETCH, ITEMS_FETCH_ERROR, ITEMS_FETCH_OK } from "../constants";

export type IListIsFetchingStore = boolean;

export const initialState = false;

export default (state: IListIsFetchingStore = initialState, action: IListAction): IListIsFetchingStore => {
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
