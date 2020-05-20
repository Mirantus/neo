import { OK } from "../../../store/constants";
import { Item } from "../../../types";
import { ITEMS_DELETE } from "../../delete/constants";
import { ListAction } from "../actions";
import { ITEMS_FETCH } from "../constants";

export type ListDataStore = Item[];

export const initialState: ListDataStore = [];

export default (state: ListDataStore = initialState, action: ListAction): ListDataStore => {
    switch (action.type) {
        case ITEMS_FETCH:
            return initialState;

        case ITEMS_FETCH + OK:
            return [...action.payload];

        case ITEMS_DELETE + OK:
            return state.filter((item) => item.id !== action.payload.id);

        default:
            return state;
    }
};
