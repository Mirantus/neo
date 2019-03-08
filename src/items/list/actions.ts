// import { Dispatch } from 'redux';

// import { apiFetch } from 'utils/api';
// import { ITEMS_FETCH, ITEMS_FETCH_OK, ITEMS_FETCH_ERROR } from '../constants';

// export const fetchItems = () => async (dispatch: Dispatch) => {
//     dispatch({
//         type: 'ITEMS_FETCH'
//     });
//
//     try {
//         const response = await apiFetch('items/');
//         const items = await response.json();
//
//         dispatch({
//             type: ITEMS_FETCH_OK,
//             payload: items
//         });
//     } catch (error) {
//         dispatch({
//             type: ITEMS_FETCH_ERROR,
//             payload: { message: 'Невозможно получить данные' }
//         });
//     }
// };

export const fetchItems = () => ({
    type: 'ITEMS_FETCH'
});