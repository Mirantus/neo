import { DeleteAction } from "../actions";
import { ITEMS_DELETE, ITEMS_DELETE_ERROR, ITEMS_DELETE_OK } from "../constants";

export type DeleteIsSubmittingStore = boolean;

export const initialState = false;

export default (state: DeleteIsSubmittingStore = initialState, action: DeleteAction): DeleteIsSubmittingStore => {
    switch (action.type) {
        case ITEMS_DELETE:
            return true;
        case ITEMS_DELETE_OK:
        case ITEMS_DELETE_ERROR:
            return initialState;
        default:
            return state;
    }
};
