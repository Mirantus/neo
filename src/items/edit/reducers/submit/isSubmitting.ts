import { EditAction } from "../../actions";
import { ITEMS_EDIT, ITEMS_EDIT_ERROR, ITEMS_EDIT_OK } from "../../constants";

export type EditIsSubmittingStore = boolean;

export const initialState = false;

export default (state: EditIsSubmittingStore = initialState, action: EditAction): EditIsSubmittingStore => {
    switch (action.type) {
        case ITEMS_EDIT:
            return true;
        case ITEMS_EDIT_OK:
        case ITEMS_EDIT_ERROR:
            return initialState;
        default:
            return state;
    }
};
