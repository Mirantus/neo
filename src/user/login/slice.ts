import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { set as setCookie } from "js-cookie";

import { Action, ActionError, SubmitState } from "../../types";
import { appFetch, FETCH_STATE } from "../../utils/api";

import { UserLoginFormData } from "./types";

export type LoginAction = Action | ActionError;
export type LoginStore = SubmitState;

export const initialState = FETCH_STATE.initial();

export const login = createAsyncThunk("login", async (values: UserLoginFormData, { dispatch }) => {
    return await appFetch(
        {
            data: values,
            method: "POST",
            url: "login/",
            okFactory: ({ token, user }) => {
                setCookie("token", String(token));
                return user;
            },
        },
        dispatch
    );
});

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        init: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, FETCH_STATE.pending);
        builder.addCase(login.fulfilled, FETCH_STATE.fulfilled);
        builder.addCase(login.rejected, FETCH_STATE.rejected);
    },
});

export const { init } = loginSlice.actions;

export default loginSlice.reducer;
