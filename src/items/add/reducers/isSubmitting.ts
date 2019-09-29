import { IAddAction } from "../actions";
import { ITEMS_ADD, ITEMS_ADD_ERROR, ITEMS_ADD_OK } from "../constants";

export type IAddIsSubmittingStore = boolean;

export const initialState = false;

export default (state: IAddIsSubmittingStore = initialState, action: IAddAction): IAddIsSubmittingStore => {
    switch (action.type) {
        case ITEMS_ADD:
            return true;
        case ITEMS_ADD_OK:
        case ITEMS_ADD_ERROR:
            return initialState;
        default:
            return state;
    }
};
