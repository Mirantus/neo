import { Dispatch } from 'redux';

import { ITEM_FETCH, ITEM_FETCH_ERROR, ITEM_FETCH_OK } from './constants';
import { apiFetch } from '../../utils/api';
import { ActionType, ActionErrorType, ItemType } from '../../types';

interface ActionOkType extends ActionType {
    payload: ItemType[]
}

export type Type = ActionType | ActionErrorType | ActionOkType;

export const fetchItem = (id: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: ITEM_FETCH
    });

    try {
        const response = await apiFetch('items/' + id);
        const item = await response.json();

        dispatch({
            type: ITEM_FETCH_OK,
            payload: item
        });
    } catch (error) {
        dispatch({
            type: ITEM_FETCH_ERROR,
            payload: { message: 'Невозможно получить данные' }
        });
    }
};