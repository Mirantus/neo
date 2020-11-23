import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Item, SubmitState } from "../../types";
import { appFetch, FETCH_STATE } from "../../utils/api";

export type AddStore = SubmitState;

export const initialState = FETCH_STATE.initial();

export const add = createAsyncThunk("items/add/submit", async (values: Item, { dispatch }) => {
    return await appFetch({ data: values, method: "POST", url: "items/add" }, dispatch);
});

const itemsAddSlice = createSlice({
    name: "items/add",
    initialState,
    reducers: {
        init: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(add.pending, FETCH_STATE.pending);
        builder.addCase(add.fulfilled, FETCH_STATE.fulfilled);
        builder.addCase(add.rejected, FETCH_STATE.rejected);
    },
});

export const { init } = itemsAddSlice.actions;

export default itemsAddSlice.reducer;
