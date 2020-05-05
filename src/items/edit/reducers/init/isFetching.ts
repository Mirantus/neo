import { EditAction } from "../../actions";
import { ITEMS_EDIT_INIT, ITEMS_EDIT_INIT_ERROR, ITEMS_EDIT_INIT_OK } from "../../constants";

export type EditInitIsFetchingStore = boolean;

export const initialState = false;

export default (state: EditInitIsFetchingStore = initialState, action: EditAction): EditInitIsFetchingStore => {
    switch (action.type) {
        case ITEMS_EDIT_INIT:
            return true;

        case ITEMS_EDIT_INIT_OK:
        case ITEMS_EDIT_INIT_ERROR:
            return initialState;

        default:
            return state;
    }
};
