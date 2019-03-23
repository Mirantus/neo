import { IError } from "../../../types";
import { IItemAction } from "../actions";
import { ITEM_FETCH, ITEM_FETCH_ERROR } from "../constants";

export type IItemErrorStore = IError | null;

const initialState = null;

export default (state: IItemErrorStore = initialState, action: IItemAction): IItemErrorStore => {
    switch (action.type) {
        case ITEM_FETCH:
            return initialState;

        case ITEM_FETCH_ERROR:
            return { ...action.payload };

        default:
            return state;
    }
};
