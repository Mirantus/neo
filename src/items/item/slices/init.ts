import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createFulfilledReducer, createPendingReducer, createRejectedReducer } from "../../../store/fetch";
import { Item, ErrorStore, IsLoadingStore } from "../../../types";
import { appFetch } from "../../../utils/api";

export type ItemInitStore = {
    data: Item | null;
    error: ErrorStore;
    pending: IsLoadingStore;
};

export const initialState: ItemInitStore = { data: null, error: null, pending: false };

export const fetchItem = createAsyncThunk("items/item", async (id: string, { dispatch }) => {
    return await appFetch({ url: "items/item?id=" + id }, dispatch);
});

const itemInitSlice = createSlice({
    name: "items/item",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItem.pending, createPendingReducer<ItemInitStore>(initialState));
        builder.addCase(fetchItem.fulfilled, createFulfilledReducer<ItemInitStore>(initialState));
        builder.addCase(fetchItem.rejected, createRejectedReducer<ItemInitStore>(initialState));
    },
});

export default itemInitSlice.reducer;
