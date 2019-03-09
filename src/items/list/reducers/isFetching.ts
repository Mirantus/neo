import { ITEMS_FETCH, ITEMS_FETCH_OK, ITEMS_FETCH_ERROR } from '../constants';
import { Type as ActionType } from '../actions';

export type Type = boolean;

const initialState = false;

export default (state: Type = initialState, action: ActionType): Type => {
    switch (action.type) {
        case ITEMS_FETCH:
            return true;

        case ITEMS_FETCH_OK:
        case ITEMS_FETCH_ERROR:
            return initialState;

        default:
            return state;
    }
};
