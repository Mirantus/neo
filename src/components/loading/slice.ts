import { createSlice } from "@reduxjs/toolkit";

export type LoadingStore = boolean;

export const initialState = false;

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        loadingHide: () => false,
        loadingShow: () => true,
    },
});

export const { loadingHide, loadingShow } = loadingSlice.actions;

export default loadingSlice.reducer;
