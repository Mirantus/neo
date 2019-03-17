import { ITEM_FETCH, ITEM_FETCH_OK } from '../constants';
import { Type as ActionType } from '../actions';
import { ItemType } from '../../../types';

export type Type = ItemType | null;

const initialState: Type = null;

export default (state: Type = initialState, action: ActionType): Type => {
    switch (action.type) {
        case ITEM_FETCH:
            return initialState;

        case ITEM_FETCH_OK:
            return action.payload;

        default:
            return state;
    }
};
