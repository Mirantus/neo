import { Dispatch } from "redux";

import { IAction, IActionError, IItem } from "../../types";
import { apiFetch } from "../../utils/api";
import { ITEMS_FETCH, ITEMS_FETCH_ERROR, ITEMS_FETCH_OK } from "./constants";

interface IActionOk extends IAction {
    payload: IItem[];
}

export type IListAction = IAction | IActionError | IActionOk;

export const fetchItems = () => async (dispatch: Dispatch) => {
    dispatch({
        type: ITEMS_FETCH,
    });

    try {
        const response = await apiFetch("items/");
        const items = await response.json();

        dispatch({
            payload: items,
            type: ITEMS_FETCH_OK,
        });
    } catch (error) {
        dispatch({
            payload: { message: "Невозможно получить данные" },
            type: ITEMS_FETCH_ERROR,
        });
    }
};
