import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { get as getCookie, remove as removeCookie, set as setCookie } from "js-cookie";

import { Action, ActionError } from "../../types";
import { appFetch } from "../../utils/api";

import { AuthResponse } from "./types";

export type AuthAction = Action | ActionError;

export const logoutAction = createAction("logoutAction");

export const auth = createAsyncThunk("auth", async (args: void, { dispatch, rejectWithValue }) => {
    const token = getCookie("token");

    if (!token) {
        dispatch(logoutAction());
        return rejectWithValue("Token not found");
    }

    return appFetch(
        {
            data: { token },
            method: "POST",
            okFactory: (response) => {
                const { user, token: newToken } = response as AuthResponse;
                setCookie("token", String(newToken));
                return user;
            },
            url: "auth/",
        },
        dispatch
    );
});

export const logout = createAsyncThunk("logout", async (args: void, { dispatch }) => {
    const token = getCookie("token");
    removeCookie("token");
    dispatch(logoutAction());

    return appFetch({ data: { token }, method: "POST", url: "logout" }, dispatch);
});
