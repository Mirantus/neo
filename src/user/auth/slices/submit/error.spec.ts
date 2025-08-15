import { auth, logoutAction } from "../../actions";

import reducer, { initialState } from "./error";

test("User auth reducer error", () => {
    // LOGOUT
    expect(reducer(initialState, logoutAction())).toBe(initialState);

    // AUTH
    const authAction = { type: auth.pending.type, payload: null };
    expect(reducer(initialState, authAction)).toBe(initialState);

    // AUTH_ERROR
    const errorAuthPayload = { id: "test1" };
    const errorAuthAction = { type: auth.rejected.type, payload: errorAuthPayload };
    expect(reducer(initialState, errorAuthAction)).toEqual(errorAuthPayload);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
