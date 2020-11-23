import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { auth, logoutAction } from "../actions";

type AuthErrorReducer = (store: AuthErrorStore, action: PayloadAction<any>) => AuthErrorStore;

export type AuthErrorStore = string | null;

export const initialState: AuthErrorStore = null;

const authErrorSlice = createSlice({
    name: "auth/error",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //auth
        builder.addCase(auth.pending, () => initialState);
        builder.addCase(auth.rejected, (state: AuthErrorStore, action: PayloadAction<any>) => action.payload);

        //logout
        builder.addCase(logoutAction, () => initialState);
    },
});

export default authErrorSlice.reducer as AuthErrorReducer;
