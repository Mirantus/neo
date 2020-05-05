import { AddAction } from "../actions";
import { ITEMS_ADD, ITEMS_ADD_ERROR, ITEMS_ADD_OK } from "../constants";

export type AddIsSubmittingStore = boolean;

export const initialState = false;

export default (state: AddIsSubmittingStore = initialState, action: AddAction): AddIsSubmittingStore => {
    switch (action.type) {
        case ITEMS_ADD:
            return true;
        case ITEMS_ADD_OK:
        case ITEMS_ADD_ERROR:
            return initialState;
        default:
            return state;
    }
};
