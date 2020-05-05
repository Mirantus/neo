import { AddAction } from "../actions";
import { ITEMS_ADD, ITEMS_ADD_ERROR, ITEMS_ADD_INIT } from "../constants";

export type AddErrorStore = string | null;

export const initialState = null;

export default (state: AddErrorStore = initialState, action: AddAction): AddErrorStore => {
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
