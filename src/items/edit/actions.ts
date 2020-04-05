import { get as getCookie } from "js-cookie";
import { Dispatch } from "redux";

import { IAction, IActionError, IItem } from "../../types";
import { fetch } from "../../utils/api";
import {
    ITEMS_EDIT,
    ITEMS_EDIT_ERROR,
    ITEMS_EDIT_INIT,
    ITEMS_EDIT_INIT_ERROR,
    ITEMS_EDIT_INIT_OK,
    ITEMS_EDIT_OK,
} from "./constants";

interface IEditInitActionOk extends IAction {
    payload: IItem[];
}

export type IEditInitAction = IAction | IActionError | IEditInitActionOk;
export type IEditAction = IAction | IActionError;

export const initEdit = (id: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ITEMS_EDIT_INIT });

    try {
        const item = await fetch("items/item?id=" + id);

        dispatch({
            payload: item,
            type: ITEMS_EDIT_INIT_OK,
        });
    } catch (error) {
        dispatch({
            payload: error,
            type: ITEMS_EDIT_INIT_ERROR,
        });
    }
};

export const edit = (values: IItem) => async (dispatch: Dispatch) => {
    dispatch({ type: ITEMS_EDIT });

    try {
        const token = getCookie("token");
        await fetch("items/edit", "POST", { ...values, token });
        dispatch({ type: ITEMS_EDIT_OK });
    } catch (error) {
        dispatch({
            payload: error,
            type: ITEMS_EDIT_ERROR,
        });
    }
};
