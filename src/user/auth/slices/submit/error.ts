import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { auth, logoutAction } from "../../actions";

type AuthSubmitErrorReducer = (store: AuthSubmitErrorStore, action: PayloadAction<any>) => AuthSubmitErrorStore;

export type AuthSubmitErrorStore = string | null;

export const initialState: AuthSubmitErrorStore = null;

const authSubmitErrorSlice = createSlice({
    name: "auth/error",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //auth
        builder.addCase(auth.pending, () => initialState);
        builder.addCase(auth.rejected, (state: AuthSubmitErrorStore, action: PayloadAction<any>) => action.payload);

        //logout
        builder.addCase(logoutAction, () => initialState);
    },
});

export default authSubmitErrorSlice.reducer as AuthSubmitErrorReducer;
