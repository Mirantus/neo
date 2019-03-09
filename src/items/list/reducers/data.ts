import { ITEMS_FETCH, ITEMS_FETCH_OK } from '../constants';
import { Type as ActionType } from '../actions';
import { ItemType } from '../../../types';

export type Type = ItemType[];

const initialState: Type = [];

export default (state: Type = initialState, action: ActionType): Type => {
    switch (action.type) {
        case ITEMS_FETCH:
            return initialState;

        case ITEMS_FETCH_OK:
            return [...action.payload];

        default:
            return state;
    }
};
