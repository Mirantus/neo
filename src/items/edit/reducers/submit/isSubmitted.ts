import { EditAction } from "../../actions";
import { ITEMS_EDIT, ITEMS_EDIT_ERROR, ITEMS_EDIT_INIT, ITEMS_EDIT_OK } from "../../constants";

export type EditIsSubmittedStore = boolean;

export const initialState = false;

export default (state: EditIsSubmittedStore = initialState, action: EditAction): EditIsSubmittedStore => {
    switch (action.type) {
        case ITEMS_EDIT_INIT:
        case ITEMS_EDIT:
            return false;
        case ITEMS_EDIT_OK:
        case ITEMS_EDIT_ERROR:
            return true;
        default:
            return state;
    }
};
