import { Dispatch } from "redux";

import { IAction, IActionError, IItem } from "../../types";
import { apiFetch } from "../../utils/api";
import { ITEM_FETCH, ITEM_FETCH_ERROR, ITEM_FETCH_OK } from "./constants";

interface IActionOk extends IAction {
    payload: IItem[];
}

export type IItemAction = IAction | IActionError | IActionOk;

export const fetchItem = (id: string) => async (dispatch: Dispatch) => {
    dispatch({
        type: ITEM_FETCH,
    });

    try {
        const response = await apiFetch("items/" + id);
        const item = await response.json();

        dispatch({
            payload: item,
            type: ITEM_FETCH_OK,
        });
    } catch (error) {
        dispatch({
            payload: { message: "Невозможно получить данные" },
            type: ITEM_FETCH_ERROR,
        });
    }
};
