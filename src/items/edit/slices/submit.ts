import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Item, SubmitState } from "../../../types";
import { appFetch, FETCH_STATE } from "../../../utils/api";

export type EditSubmitStore = SubmitState;

export const initialState = FETCH_STATE.initial();

export const itemsEditSubmit = createAsyncThunk("items/edit/submit", async (values: Item, { dispatch }) => {
    return await appFetch({ data: values, method: "POST", url: "items/edit" }, dispatch);
});

const submitSlice = createSlice({
    name: "items/edit/submit",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(itemsEditSubmit.pending, FETCH_STATE.pending);
        builder.addCase(itemsEditSubmit.fulfilled, FETCH_STATE.fulfilled);
        builder.addCase(itemsEditSubmit.rejected, FETCH_STATE.rejected);
    },
});

export default submitSlice.reducer;
