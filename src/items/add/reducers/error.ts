import { IError } from "../../../types";
import { IAddAction } from "../actions";
import { ITEMS_ADD, ITEMS_ADD_ERROR } from "../constants";

export type IAddErrorStore = IError | null;

const initialState = null;

export default (state: IAddErrorStore = initialState, action: IAddAction): IAddErrorStore => {
    switch (action.type) {
        case ITEMS_ADD:
            return initialState;

        case ITEMS_ADD_ERROR:
            return { ...action.payload };

        default:
            return state;
    }
};
