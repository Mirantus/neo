import { Item } from "../../../types";
import { ITEMS_DELETE_OK } from "../../delete/constants";
import { ListAction } from "../actions";
import { ITEMS_FETCH, ITEMS_FETCH_OK } from "../constants";

export type ListDataStore = Item[];

export const initialState: ListDataStore = [];

export default (state: ListDataStore = initialState, action: ListAction): ListDataStore => {
    switch (action.type) {
        case ITEMS_FETCH:
            return initialState;

        case ITEMS_FETCH_OK:
            return [...action.payload];

        case ITEMS_DELETE_OK:
            return state.filter(item => item.id !== action.payload.id);

        default:
            return state;
    }
};
