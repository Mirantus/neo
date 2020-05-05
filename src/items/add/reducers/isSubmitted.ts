import { AddAction } from "../actions";
import { ITEMS_ADD, ITEMS_ADD_ERROR, ITEMS_ADD_INIT, ITEMS_ADD_OK } from "../constants";

export type AddIsSubmittedStore = boolean;

export const initialState = false;

export default (state: AddIsSubmittedStore = initialState, action: AddAction): AddIsSubmittedStore => {
    switch (action.type) {
        case ITEMS_ADD_INIT:
        case ITEMS_ADD:
            return false;
        case ITEMS_ADD_OK:
        case ITEMS_ADD_ERROR:
            return true;
        default:
            return state;
    }
};
