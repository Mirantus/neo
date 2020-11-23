import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Item, SubmitState } from "../../../types";
import { appFetch, FETCH_STATE } from "../../../utils/api";

export type EditSubmitStore = SubmitState;

export const initialState = FETCH_STATE.initial();

export const submit = createAsyncThunk("items/edit/submit", async (values: Item, { dispatch }) => {
    return await appFetch({ data: values, method: "POST", url: "items/edit" }, dispatch);
});

const itemsEditSubmitSlice = createSlice({
    name: "items/edit/submit",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(submit.pending, FETCH_STATE.pending);
        builder.addCase(submit.fulfilled, FETCH_STATE.fulfilled);
        builder.addCase(submit.rejected, FETCH_STATE.rejected);
    },
});

export default itemsEditSubmitSlice.reducer;
