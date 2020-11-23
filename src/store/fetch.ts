import { PayloadAction } from "@reduxjs/toolkit";

export const createPendingReducer = <T>(initialState: T) => () => ({
    ...initialState,
    isFetching: true,
});

export const createRejectedReducer = <T>(initialState: T) => (state: T, action: PayloadAction<any>) => ({
    ...initialState,
    error: action.payload,
});

export const createFullfilledReducer = <T>(initialState: T) => (state: T, action: PayloadAction<any>) => ({
    ...initialState,
    data: action.payload,
});
