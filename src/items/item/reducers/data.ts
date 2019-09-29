import { IItem } from "../../../types";
import { IItemAction } from "../actions";
import { ITEM_FETCH, ITEM_FETCH_OK } from "../constants";

export type IItemDataStore = IItem | null;

export const initialState: IItemDataStore = null;

export default (state: IItemDataStore = initialState, action: IItemAction): IItemDataStore => {
    switch (action.type) {
        case ITEM_FETCH:
            return initialState;

        case ITEM_FETCH_OK:
            return action.payload;

        default:
            return state;
    }
};
