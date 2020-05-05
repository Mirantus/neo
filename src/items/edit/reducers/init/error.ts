import { EditAction } from "../../actions";
import { ITEMS_EDIT_INIT, ITEMS_EDIT_INIT_ERROR } from "../../constants";

export type EditInitErrorStore = string | null;

export const initialState = null;

export default (state: EditInitErrorStore = initialState, action: EditAction): EditInitErrorStore => {
    switch (action.type) {
        case ITEMS_EDIT_INIT:
            return initialState;

        case ITEMS_EDIT_INIT_ERROR:
            return action.payload;

        default:
            return state;
    }
};
