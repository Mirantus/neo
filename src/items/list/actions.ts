import { Dispatch } from 'redux';

import { ITEMS_FETCH } from './constants';
import { apiFetch } from '../../utils/api';

export const fetchItems = () => async (dispatch: Dispatch) => {
    dispatch({
        type: ITEMS_FETCH
    });

    try {
        // const response =
            await apiFetch('items/');
    //     const items = await response.json();
    //
    //     dispatch({
    //         type: ITEMS_FETCH_OK,
    //         payload: items
    //     });
    } catch (error) {
    //     dispatch({
    //         type: ITEMS_FETCH_ERROR,
    //         payload: { message: 'Невозможно получить данные' }
    //     });
    }
};