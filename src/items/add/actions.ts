import { Dispatch } from "redux";

import { IAction, IActionError, IItem } from "../../types";
import { apiFetch } from "../../utils/api";

export type IAddAction = IAction | IActionError;

import { ITEMS_ADD, ITEMS_ADD_ERROR, ITEMS_ADD_INIT, ITEMS_ADD_OK } from "./constants";

export const initAdd = () => ({ type: ITEMS_ADD_INIT });

export const add = (values: IItem) => async (dispatch: Dispatch) => {
    dispatch({ type: ITEMS_ADD });

    try {
        const response = await apiFetch("items/", "PUT", values);
        await response.json();
        dispatch({ type: ITEMS_ADD_OK });
    } catch (error) {
        dispatch({
            payload: { message: "Ошибка отправки данных" },
            type: ITEMS_ADD_ERROR,
        });
    }
};
