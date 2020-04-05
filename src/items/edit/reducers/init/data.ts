import { IItem } from "../../../../types";
import { IEditAction } from "../../actions";
import { ITEMS_EDIT_INIT, ITEMS_EDIT_INIT_OK } from "../../constants";

export type IEditInitDataStore = IItem | null;

export const initialState: IEditInitDataStore = null;

export default (state: IEditInitDataStore = initialState, action: IEditAction): IEditInitDataStore => {
    switch (action.type) {
        case ITEMS_EDIT_INIT:
            return initialState;

        case ITEMS_EDIT_INIT_OK:
            return action.payload;

        default:
            return state;
    }
};
