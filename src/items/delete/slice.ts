import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { SubmitState } from "../../types";
import { appFetch, FETCH_STATE } from "../../utils/api";

export type DeleteStore = SubmitState;

export const initialState = FETCH_STATE.initial();

export const deleteItem = createAsyncThunk("items/add/submit", async (id: string, { dispatch }) => {
    return await appFetch({ data: { id }, global: true, method: "POST", url: "items/delete" }, dispatch);
});

const itemsDeleteSlice = createSlice({
    name: "items/delete",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deleteItem.pending, FETCH_STATE.pending);
        builder.addCase(deleteItem.fulfilled, FETCH_STATE.fulfilled);
        builder.addCase(deleteItem.rejected, FETCH_STATE.rejected);
    },
});

export default itemsDeleteSlice.reducer;
