import { auth, logoutAction } from "../../actions";

import reducer, { initialState } from "./pending";

test("User Auth reducer pending", () => {
    // LOGOUT
    expect(reducer(initialState, logoutAction())).toBe(false);

    // AUTH
    const authAction = { type: auth.pending.type, payload: null };
    expect(reducer(initialState, authAction)).toBe(true);

    // AUTH_OK
    const authOkAction = { type: auth.fulfilled.type, payload: null };
    expect(reducer(initialState, authOkAction)).toBe(false);

    // AUTH_ERROR
    const authErrorAction = { type: auth.rejected.type, payload: null };
    expect(reducer(initialState, authErrorAction)).toBe(false);

    // default
    const otherAction = { type: "test", payload: null };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
