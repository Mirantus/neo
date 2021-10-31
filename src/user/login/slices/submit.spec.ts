import { FETCH_STATE } from "../../../utils/api";

import reducer, { initialState, login } from "./submit";

const error = "error";

test("Login submit slice", () => {
    // SUBMIT PENDING
    const loginPendingAction = { type: login.pending.type };
    expect(reducer(initialState, loginPendingAction)).toEqual(FETCH_STATE.pending());

    // SUBMIT FULFILLED
    const loginFulfilledAction = { type: login.fulfilled.type };
    expect(reducer(initialState, loginFulfilledAction)).toEqual(FETCH_STATE.fulfilled());

    // SUBMIT REJECTED
    const loginRejectedAction = { type: login.rejected.type, error };
    expect(reducer(initialState, loginRejectedAction)).toEqual(FETCH_STATE.rejected(initialState, loginRejectedAction));

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
