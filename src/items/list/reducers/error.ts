import { ITEMS_FETCH, ITEMS_FETCH_ERROR } from '../constants';
import { Type as ActionType } from '../actions';
import { ErrorType } from '../../../types';

export type Type = ErrorType | null;

const initialState = null;

export default (state: Type = initialState, action: ActionType): Type => {
    switch (action.type) {
        case ITEMS_FETCH:
            return initialState;

        case ITEMS_FETCH_ERROR:
            return { ...action.payload };

        default:
            return state;
    }
};
