import { Dispatch } from "redux";

import { Action, ActionError, Item } from "../../types";
import { fetch } from "../../utils/api";
import { ITEM_FETCH, ITEM_FETCH_ERROR, ITEM_FETCH_OK } from "./constants";

interface ActionOk extends Action {
    payload: Item[];
}

export type ItemAction = Action | ActionError | ActionOk;

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
