import { Dispatch } from 'redux';

import { ITEMS_FETCH, ITEMS_FETCH_ERROR, ITEMS_FETCH_OK } from './constants';
import { apiFetch } from '../../utils/api';
import { ActionType, ActionErrorType, ItemType } from '../../types';

interface ActionOkType extends ActionType {
    payload: ItemType[]
}

export type Type = ActionType | ActionErrorType | ActionOkType;

export const fetchItems = () => async (dispatch: Dispatch) => {
    dispatch({
        type: ITEMS_FETCH
    });

    try {
        const response = await apiFetch('items/');
        const items = await response.json();

        dispatch({
            type: ITEMS_FETCH_OK,
            payload: items
        });
    } catch (error) {
        dispatch({
            type: ITEMS_FETCH_ERROR,
            payload: { message: 'Невозможно получить данные' }
        });
    }
};