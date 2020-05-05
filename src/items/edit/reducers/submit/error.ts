import { EditAction } from "../../actions";
import { ITEMS_EDIT, ITEMS_EDIT_ERROR, ITEMS_EDIT_INIT } from "../../constants";

export type EditErrorStore = string | null;

export const initialState = null;

export default (state: EditErrorStore = initialState, action: EditAction): EditErrorStore => {
    switch (action.type) {
        case ITEMS_EDIT:
        case ITEMS_EDIT_INIT:
            return initialState;

        case ITEMS_EDIT_ERROR:
            return action.payload;

        default:
            return state;
    }
};
