import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createFullfilledReducer, createPendingReducer, createRejectedReducer } from "../../../store/fetch";
import { Item, ErrorStore, IsLoadingStore } from "../../../types";
import { appFetch } from "../../../utils/api";

export type EditInitStore = {
    data: Item | null;
    error: ErrorStore;
    isFetching: IsLoadingStore;
};

export const initialState: EditInitStore = { data: null, error: null, isFetching: false };

export const init = createAsyncThunk("items/edit/init", async (id: string, { dispatch }) => {
    return await appFetch({ url: "items/item?id=" + id }, dispatch);
});

const itemsEditInitSlice = createSlice({
    name: "items/edit/init",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(init.pending, createPendingReducer<EditInitStore>(initialState));
        builder.addCase(init.fulfilled, createFullfilledReducer<EditInitStore>(initialState));
        builder.addCase(init.rejected, createRejectedReducer<EditInitStore>(initialState));
    },
});

export default itemsEditInitSlice.reducer;
