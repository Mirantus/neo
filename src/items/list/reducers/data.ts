import { IItem } from "../../../types";
import { ITEMS_DELETE_OK } from "../../delete/constants";
import { IListAction } from "../actions";
import { ITEMS_FETCH, ITEMS_FETCH_OK } from "../constants";

export type IListDataStore = IItem[];

export const initialState: IListDataStore = [];

export default (state: IListDataStore = initialState, action: IListAction): IListDataStore => {
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
