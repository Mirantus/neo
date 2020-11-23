import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createFullfilledReducer, createPendingReducer, createRejectedReducer } from "../../store/fetch";
import { Item, ErrorStore, IsLoadingStore } from "../../types";
import { appFetch } from "../../utils/api";

export type ItemStore = {
    data: Item | null;
    error: ErrorStore;
    isFetching: IsLoadingStore;
};

export const initialState: ItemStore = { data: null, error: null, isFetching: false };

export const fetchItem = createAsyncThunk("items/item", async (id: string, { dispatch }) => {
    return await appFetch({ url: "items/item?id=" + id }, dispatch);
});

const itemSlice = createSlice({
    name: "items/item",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItem.pending, createPendingReducer<ItemStore>(initialState));
        builder.addCase(fetchItem.fulfilled, createFullfilledReducer<ItemStore>(initialState));
        builder.addCase(fetchItem.rejected, createRejectedReducer<ItemStore>(initialState));
    },
});

export default itemSlice.reducer;
