import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { set as setCookie } from "js-cookie";

import { Action, ActionError, SubmitState } from "../../../types";
import { appFetch, FETCH_STATE } from "../../../utils/api";
import { UserRegisterFormData } from "../types";

export type RegisterAction = Action | ActionError;
export type RegisterSubmitStore = SubmitState;

export const initialState = FETCH_STATE.initial();

export const register = createAsyncThunk("register", async (values: UserRegisterFormData, { dispatch }) => {
    return await appFetch(
        {
            data: values,
            method: "POST",
            url: "register/",
            okFactory: ({ token, user }) => {
                setCookie("token", String(token));
                return user;
            },
        },
        dispatch
    );
});

const registerSubmitSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        init: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, FETCH_STATE.pending);
        builder.addCase(register.fulfilled, FETCH_STATE.fulfilled);
        builder.addCase(register.rejected, FETCH_STATE.rejected);
    },
});

export const { init } = registerSubmitSlice.actions;

export default registerSubmitSlice.reducer;
