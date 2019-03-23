import { IItemAction } from "../actions";
import { ITEM_FETCH, ITEM_FETCH_ERROR, ITEM_FETCH_OK } from "../constants";

export type IItemIsFetchingStore = boolean;

const initialState = false;

export default (state: IItemIsFetchingStore = initialState, action: IItemAction): IItemIsFetchingStore => {
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
