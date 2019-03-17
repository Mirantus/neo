import { ITEM_FETCH, ITEM_FETCH_OK, ITEM_FETCH_ERROR } from '../constants';
import { Type as ActionType } from '../actions';

export type Type = boolean;

const initialState = false;

export default (state: Type = initialState, action: ActionType): Type => {
    switch (action.type) {
        case ITEM_FETCH:
            return true;

        case ITEM_FETCH_OK:
        case ITEM_FETCH_ERROR:
            return initialState;

        default:
            return state;
    }
};
