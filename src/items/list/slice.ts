import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createFullfilledReducer, createPendingReducer, createRejectedReducer } from "../../store/fetch";
import { Item, ErrorStore, IsLoadingStore } from "../../types";
import { appFetch } from "../../utils/api";
import { deleteItem } from "../delete/slice";

export interface ListStore {
    data: Item[];
    error: ErrorStore;
    isFetching: IsLoadingStore;
}

export const initialState: ListStore = { data: [], error: null, isFetching: false };

export const fetchItems = createAsyncThunk("items/list", async (arg: void, { dispatch }) => {
    return await appFetch({ url: "items/" }, dispatch);
});

const listSlice = createSlice({
    name: "items/list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, createPendingReducer<ListStore>(initialState));
        builder.addCase(fetchItems.fulfilled, createFullfilledReducer<ListStore>(initialState));
        builder.addCase(fetchItems.rejected, createRejectedReducer<ListStore>(initialState));
        builder.addCase(deleteItem.fulfilled, (state: ListStore, action: PayloadAction<Item>) => {
            state.data = state.data.filter((item) => item.id !== action.payload.id);
            return state;
        });
    },
});

export default listSlice.reducer;
