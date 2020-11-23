import { createSlice } from "@reduxjs/toolkit";

import { login } from "../../login/slice";
import { register } from "../../register/slice";
import { auth, logoutAction } from "../actions";

export type AuthIsAuthorizedStore = boolean;

export const initialState: AuthIsAuthorizedStore = false;

const authIsAuthorizedSlice = createSlice({
    name: "auth/isAuthorized",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //auth
        builder.addCase(auth.pending, () => initialState);
        builder.addCase(auth.fulfilled, () => true);
        builder.addCase(auth.rejected, () => initialState);

        //register
        builder.addCase(register.fulfilled, () => true);

        //login
        builder.addCase(login.fulfilled, () => true);

        //logout
        builder.addCase(logoutAction, () => initialState);
    },
});

export default authIsAuthorizedSlice.reducer;
