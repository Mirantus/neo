import { OK } from "../../../store/constants";
import { Item } from "../../../types";
import { ItemAction } from "../actions";
import { ITEM_FETCH } from "../constants";

export type ItemDataStore = Item | null;

export const initialState: ItemDataStore = null;

export default (state: ItemDataStore = initialState, action: ItemAction): ItemDataStore => {
    switch (action.type) {
        case ITEM_FETCH:
            return initialState;

        case ITEM_FETCH + OK:
            return action.payload;

        default:
            return state;
    }
};
