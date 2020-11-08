import { get as getCookie } from "js-cookie";
import { Dispatch } from "redux";

import { loadingHide, loadingShow } from "../components/loading/actions";
import { messageShow } from "../components/message/actions";
import { fetch } from "../utils/api";

import { ERROR, OK } from "./constants";

export const createFetch = ({
    actionType = "",
    data = {},
    global = false,
    method = "GET",
    okFactory = (response: any) => response,
    url = "",
}) => async (dispatch: Dispatch) => {
    dispatch({ type: actionType });

    if (global) {
        dispatch(loadingShow());
    }

    try {
        const token = getCookie("token");
        const response = await fetch(url, method, { ...data, token });
        dispatch({
            payload: okFactory(response),
            type: actionType + OK,
        });
    } catch (error) {
        dispatch({
            payload: error,
            type: actionType + ERROR,
        });

        if (global) {
            dispatch(messageShow(error, "danger"));
        }
    }

    if (global) {
        dispatch(loadingHide());
    }
};
