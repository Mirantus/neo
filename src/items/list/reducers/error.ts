import { IError } from "../../../types";
import { IListAction } from "../actions";
import { ITEMS_FETCH, ITEMS_FETCH_ERROR } from "../constants";

export type IListErrorStore = IError | null;

export const initialState = null;

export default (state: IListErrorStore = initialState, action: IListAction): IListErrorStore => {
    switch (action.type) {
        case ITEMS_FETCH:
            return initialState;

        case ITEMS_FETCH_ERROR:
            return { ...action.payload };

        default:
            return state;
    }
};
