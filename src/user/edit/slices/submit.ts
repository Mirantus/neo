import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get as getCookie } from "js-cookie";

import { SubmitState } from "../../../types";
import { appFetch, FETCH_STATE } from "../../../utils/api";
import { UserEditFormData } from "../types";

export type UserEditSubmitStore = SubmitState;

export const initialState = FETCH_STATE.initial();

export const submit = createAsyncThunk("user/edit/submit", async (values: UserEditFormData, { dispatch }) => {
    const token = getCookie("token");

    return await appFetch(
        {
            data: { ...values, token },
            method: "POST",
            url: "user/edit/",
        },
        dispatch
    );
});

const userEditSubmitSlice = createSlice({
    name: "userEdit",
    initialState,
    reducers: {
        init: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(submit.pending, FETCH_STATE.pending);
        builder.addCase(submit.fulfilled, FETCH_STATE.fulfilled);
        builder.addCase(submit.rejected, FETCH_STATE.rejected);
    },
});

export const { init } = userEditSubmitSlice.actions;

export default userEditSubmitSlice.reducer;
