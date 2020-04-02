import { Dispatch } from "redux";

import { IAction, IActionError, IItem } from "../../types";
import { fetch } from "../../utils/api";
import { ITEM_FETCH, ITEM_FETCH_ERROR, ITEM_FETCH_OK } from "./constants";

interface IActionOk extends IAction {
    payload: IItem[];
}

export type IItemAction = IAction | IActionError | IActionOk;

export const fetchItem = (id: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ITEM_FETCH });

    try {
        const item = await fetch("items/item?id=" + id);

        dispatch({
            payload: item,
            type: ITEM_FETCH_OK,
        });
    } catch (error) {
        dispatch({
            payload: error,
            type: ITEM_FETCH_ERROR,
        });
    }
};
