import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createFulfilledReducer, createPendingReducer, createRejectedReducer } from "../../../store/fetch";
import { Item, ErrorStore, IsLoadingStore } from "../../../types";
import { appFetch } from "../../../utils/api";

export type EditInitStore = {
    data: Item | null;
    error: ErrorStore;
    pending: IsLoadingStore;
};

export const initialState: EditInitStore = { data: null, error: null, pending: false };

export const itemsEditInit = createAsyncThunk("items/edit/init", async (id: string, { dispatch }) => {
    return await appFetch({ url: "items/item?id=" + id }, dispatch);
});

const initSlice = createSlice({
    name: "items/edit/init",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(itemsEditInit.pending, createPendingReducer<EditInitStore>(initialState));
        builder.addCase(itemsEditInit.fulfilled, createFulfilledReducer<EditInitStore>(initialState));
        builder.addCase(itemsEditInit.rejected, createRejectedReducer<EditInitStore>(initialState));
    },
});

export default initSlice.reducer;
