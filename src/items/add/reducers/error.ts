import { IAddAction } from "../actions";
import { ITEMS_ADD, ITEMS_ADD_ERROR, ITEMS_ADD_INIT } from "../constants";

export type IAddErrorStore = string | null;

export const initialState = null;

export default (state: IAddErrorStore = initialState, action: IAddAction): IAddErrorStore => {
    switch (action.type) {
        case ITEMS_ADD:
        case ITEMS_ADD_INIT:
            return initialState;

        case ITEMS_ADD_ERROR:
            return action.payload;

        default:
            return state;
    }
};
