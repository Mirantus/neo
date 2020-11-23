import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get as getCookie } from "js-cookie";

import { SubmitState } from "../../types";
import { appFetch, FETCH_STATE } from "../../utils/api";

import { ChangePasswordFormData } from "./types";

export type ChangePasswordStore = SubmitState;

export const initialState = FETCH_STATE.initial();

export const changePassword = createAsyncThunk(
    "changePassword",
    async (values: ChangePasswordFormData, { dispatch }) => {
        const token = getCookie("token");

        return await appFetch(
            {
                data: { ...values, token },
                method: "POST",
                url: "change_password/",
                okFactory: () => values,
            },
            dispatch
        );
    }
);

const changePasswordSlice = createSlice({
    name: "changePassword",
    initialState,
    reducers: {
        init: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(changePassword.pending, FETCH_STATE.pending);
        builder.addCase(changePassword.fulfilled, FETCH_STATE.fulfilled);
        builder.addCase(changePassword.rejected, FETCH_STATE.rejected);
    },
});

export const { init } = changePasswordSlice.actions;

export default changePasswordSlice.reducer;
