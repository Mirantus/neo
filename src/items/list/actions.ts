import { Dispatch } from "redux";

import { IAction, IActionError, IItem } from "../../types";
import { fetch } from "../../utils/api";
import { ITEMS_FETCH, ITEMS_FETCH_ERROR, ITEMS_FETCH_OK } from "./constants";

interface IActionOk extends IAction {
    payload: IItem[];
}

export type IListAction = IAction | IActionError | IActionOk;

export const fetchItems = () => async (dispatch: Dispatch) => {
    dispatch({ type: ITEMS_FETCH });

    try {
        const items = await fetch("items/");

        dispatch({
            payload: items,
            type: ITEMS_FETCH_OK,
        });
    } catch (error) {
        dispatch({
            payload: error,
            type: ITEMS_FETCH_ERROR,
        });
    }
};
