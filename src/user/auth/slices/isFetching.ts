import { createSlice } from "@reduxjs/toolkit";

import { auth, logoutAction } from "../actions";

export type AuthIsFetchingStore = boolean;

export const initialState: AuthIsFetchingStore = true;

const authIsFetchingSlice = createSlice({
    name: "auth/isFetching",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //auth
        builder.addCase(auth.pending, () => true);
        builder.addCase(auth.fulfilled, () => false);
        builder.addCase(auth.rejected, () => false);

        //logout
        builder.addCase(logoutAction, () => false);
    },
});

export default authIsFetchingSlice.reducer;
