import { IEditAction } from "../../actions";
import { ITEMS_EDIT, ITEMS_EDIT_ERROR, ITEMS_EDIT_INIT, ITEMS_EDIT_OK } from "../../constants";

export type IEditIsSubmittedStore = boolean;

export const initialState = false;

export default (state: IEditIsSubmittedStore = initialState, action: IEditAction): IEditIsSubmittedStore => {
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
