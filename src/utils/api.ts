import { get as getCookie } from "js-cookie";
import { runInAction } from "mobx";

import store from "../store";

interface ApiOptions {
    body?: string;
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
    entity: { pending?: boolean; data?: unknown; error?: string | null; settled?: boolean }
) => {
    entity.pending = true;
    entity.settled = false;

    if (global) {
        store.loadingShow();
    }

    try {
        const token = getCookie("token");
        const response = await fetch(url, method, { ...data, token });
        runInAction(() => {
            entity.data = okFactory(response);
        });
    } catch (error) {
        runInAction(() => {
            entity.error = error;
        });

        if (global) {
            store.message.messageShow(error, "danger");
        }
        throw error;
    } finally {
        runInAction(() => {
            entity.pending = false;
            entity.settled = true;
        });

        if (global) {
            store.loadingHide();
        }
    }
};
