import { createSlice } from "@reduxjs/toolkit";

import { auth, logoutAction } from "../../actions";

export type AuthSubmitPendingStore = boolean;

export const initialState: AuthSubmitPendingStore = true;

const authSubmitPendingSlice = createSlice({
    name: "auth/pending",
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

export default authSubmitPendingSlice.reducer;
