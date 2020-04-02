import { get as getCookie } from "js-cookie";
import { Dispatch } from "redux";

import { IAction, IActionError, IItem } from "../../types";
import { fetch } from "../../utils/api";

export type IAddAction = IAction | IActionError;

import { ITEMS_ADD, ITEMS_ADD_ERROR, ITEMS_ADD_INIT, ITEMS_ADD_OK } from "./constants";

export const initAdd = () => ({ type: ITEMS_ADD_INIT });

export const add = (values: IItem) => async (dispatch: Dispatch) => {
    dispatch({ type: ITEMS_ADD });

    try {
        const token = getCookie("token");
        await fetch("items/add", "POST", { ...values, token });
        dispatch({ type: ITEMS_ADD_OK });
    } catch (error) {
        dispatch({
            payload: error,
            type: ITEMS_ADD_ERROR,
        });
    }
};
