import { PayloadAction } from "@reduxjs/toolkit";

export const createPendingReducer = <T>(initialState: T) => () => ({
    ...initialState,
    pending: true,
});

export const createRejectedReducer = <T>(initialState: T) => (state: T, action: PayloadAction<any>) => ({
    ...initialState,
    error: action.payload,
});

export const createFulfilledReducer = <T>(initialState: T) => (state: T, action: PayloadAction<any>) => ({
    ...initialState,
    data: action.payload,
});
