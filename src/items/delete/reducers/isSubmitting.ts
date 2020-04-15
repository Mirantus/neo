import { IDeleteAction } from "../actions";
import { ITEMS_DELETE, ITEMS_DELETE_ERROR, ITEMS_DELETE_OK } from "../constants";

export type IDeleteIsSubmittingStore = boolean;

export const initialState = false;

export default (state: IDeleteIsSubmittingStore = initialState, action: IDeleteAction): IDeleteIsSubmittingStore => {
    switch (action.type) {
        case ITEMS_DELETE:
            return true;
        case ITEMS_DELETE_OK:
        case ITEMS_DELETE_ERROR:
            return initialState;
        default:
            return state;
    }
};
