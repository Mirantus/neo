import { IDeleteAction } from "../actions";
import { ITEMS_DELETE, ITEMS_DELETE_ERROR } from "../constants";

export type IDeleteErrorStore = string | null;

export const initialState = null;

export default (state: IDeleteErrorStore = initialState, action: IDeleteAction): IDeleteErrorStore => {
    switch (action.type) {
        case ITEMS_DELETE:
            return initialState;

        case ITEMS_DELETE_ERROR:
            return action.payload;

        default:
            return state;
    }
};
