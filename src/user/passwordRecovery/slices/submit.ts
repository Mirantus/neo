import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { messageShow } from "../../../components/message/slice";
import { SubmitState } from "../../../types";
import { appFetch, FETCH_STATE } from "../../../utils/api";
import { PasswordRecoveryFormData } from "../types";

export type PasswordRecoverySubmitStore = SubmitState;

export const initialState = FETCH_STATE.initial();

export const passwordRecovery = createAsyncThunk(
    "passwordRecovery",
    async (values: PasswordRecoveryFormData, { dispatch }) => {
        return await appFetch(
            {
                data: values,
                method: "GET",
                url: "password_recovery/",
                okFactory: () => {
                    dispatch(messageShow("Новый пароль отправлен на указанный email", "success"));
                    return values;
                },
            },
            dispatch
        );
    }
);

const passwordRecoverySubmitSlice = createSlice({
    name: "password_recovery/",
    initialState,
    reducers: {
        init: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(passwordRecovery.pending, FETCH_STATE.pending);
        builder.addCase(passwordRecovery.fulfilled, FETCH_STATE.fulfilled);
        builder.addCase(passwordRecovery.rejected, FETCH_STATE.rejected);
    },
});

export const { init } = passwordRecoverySubmitSlice.actions;

export default passwordRecoverySubmitSlice.reducer;
