import { Dispatch, Action } from "@reduxjs/toolkit";
import { get as getCookie } from "js-cookie";

import { loadingHide, loadingShow } from "../components/loading/slice";
import { messageShow } from "../components/message/slice";
import { SubmitState } from "../types";

interface ApiOptions {
    body?: string;
}

interface RejectedAction extends Action {
    error: any;
}

export const request = (apiUrl: string, apiMethod = "GET", apiData: {} = {}, apiOptions: ApiOptions = {}) => {
    const globalAny: any = global;
    let url = APP_ENV.apiUrl + apiUrl;
    const options = {
        method: apiMethod,
        ...apiOptions,
    };

    if (Object.keys(apiData).length) {
        if (apiMethod === "GET") {
            const prefix = url.includes("?") ? "&" : "?";
            url += `${prefix}${Object.entries(apiData)
                .map(([key, val]) => `${key}=${val}`)
                .join("&")}`;
        } else {
            options.body = JSON.stringify(apiData);
        }
    }

    return globalAny.fetch(url, options);
};

export const fetch = async (apiUrl: string, apiMethod = "GET", apiData: {} = {}, apiOptions: ApiOptions = {}) => {
    let responseText;

    try {
        const response = await request(apiUrl, apiMethod, apiData, apiOptions);
        responseText = await response.clone().text();

        if (response.status === 200) {
            try {
                return await response.json();
            } catch (e) {
                return responseText;
            }
        }
    } catch (error) {
        console.log(error);
        throw "Ошибка отправки данных";
    }

    throw responseText;
};

export const appFetch = async (
    { data = {}, global = false, method = "GET", okFactory = (response: any) => response, url = "" },
    dispatch: Dispatch
) => {
    if (global) {
        dispatch(loadingShow());
    }

    try {
        const token = getCookie("token");
        const response = await fetch(url, method, { ...data, token });
        return okFactory(response);
    } catch (error) {
        if (global) {
            dispatch(messageShow(error, "danger"));
        }
        throw error;
    } finally {
        if (global) {
            dispatch(loadingHide());
        }
    }
};

export const FETCH_STATE = {
    initial: () => ({ error: null, pending: false, settled: false }),
    pending: () => ({ error: null, pending: true, settled: false }),
    fulfilled: () => ({ error: null, pending: false, settled: true }),
    rejected: (state: SubmitState, action: RejectedAction) => {
        return {
            error: action.error.message,
            pending: false,
            settled: true,
        };
    },
};
