import { IEditAction } from "../../actions";
import { ITEMS_EDIT_INIT, ITEMS_EDIT_INIT_ERROR, ITEMS_EDIT_INIT_OK } from "../../constants";

export type IEditInitIsFetchingStore = boolean;

export const initialState = false;

export default (state: IEditInitIsFetchingStore = initialState, action: IEditAction): IEditInitIsFetchingStore => {
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
