import { DeleteAction } from "../actions";
import { ITEMS_DELETE, ITEMS_DELETE_ERROR } from "../constants";

export type DeleteErrorStore = string | null;

export const initialState = null;

export default (state: DeleteErrorStore = initialState, action: DeleteAction): DeleteErrorStore => {
    switch (action.type) {
        case ITEMS_DELETE:
            return initialState;

        case ITEMS_DELETE_ERROR:
            return action.payload;

        default:
            return state;
    }
};
