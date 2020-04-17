import { get as getCookie } from "js-cookie";
import { Dispatch } from "redux";

import { IAction, IActionError } from "../../types";
import { fetch } from "../../utils/api";

export type IDeleteAction = IAction | IActionError;

import { loadingHide, loadingShow } from "../../components/loading/actions";
import { messageShow } from "../../components/message/actions";
import { ITEMS_DELETE, ITEMS_DELETE_ERROR, ITEMS_DELETE_OK } from "./constants";

export const deleteItem = (id: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ITEMS_DELETE });
    dispatch(loadingShow());

    try {
        const token = getCookie("token");
        const item = await fetch("items/delete", "POST", { id, token });
        dispatch({ payload: item, type: ITEMS_DELETE_OK });
    } catch (error) {
        dispatch({ payload: error, type: ITEMS_DELETE_ERROR });
        dispatch(messageShow(error, "danger"));
    }

    dispatch(loadingHide());
};
