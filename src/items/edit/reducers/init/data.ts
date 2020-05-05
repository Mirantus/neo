import { Item } from "../../../../types";
import { EditAction } from "../../actions";
import { ITEMS_EDIT_INIT, ITEMS_EDIT_INIT_OK } from "../../constants";

export type EditInitDataStore = Item | null;

export const initialState: EditInitDataStore = null;

export default (state: EditInitDataStore = initialState, action: EditAction): EditInitDataStore => {
    switch (action.type) {
        case ITEMS_EDIT_INIT:
            return initialState;

        case ITEMS_EDIT_INIT_OK:
            return action.payload;

        default:
            return state;
    }
};
