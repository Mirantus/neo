import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createFulfilledReducer, createPendingReducer, createRejectedReducer } from "../../../store/fetch";
import { Item, ErrorStore, IsLoadingStore } from "../../../types";
import { appFetch } from "../../../utils/api";
import { deleteItem } from "../../delete/slices/submit";

export interface ListInitStore {
    data: Item[];
    error: ErrorStore;
    pending: IsLoadingStore;
}

export const initialState: ListInitStore = { data: [], error: null, pending: false };

export const fetchItems = createAsyncThunk("items/list", async (arg: void, { dispatch }) => {
    return await appFetch({ url: "items/" }, dispatch);
});

const listInitSlice = createSlice({
    name: "items/list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, createPendingReducer<ListInitStore>(initialState));
        builder.addCase(fetchItems.fulfilled, createFulfilledReducer<ListInitStore>(initialState));
        builder.addCase(fetchItems.rejected, createRejectedReducer<ListInitStore>(initialState));
        builder.addCase(deleteItem.fulfilled, (state: ListInitStore, action: PayloadAction<Item>) => {
            state.data = state.data.filter((item) => item.id !== action.payload.id);
            return state;
        });
    },
});

export default listInitSlice.reducer;
