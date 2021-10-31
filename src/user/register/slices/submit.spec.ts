import { FETCH_STATE } from "../../../utils/api";

import reducer, { initialState, register } from "./submit";

const error = "error";

test("Register submit slice", () => {
    // SUBMIT PENDING
    const registerPendingAction = { type: register.pending.type };
    expect(reducer(initialState, registerPendingAction)).toEqual(FETCH_STATE.pending());

    // SUBMIT FULFILLED
    const registerFulfilledAction = { type: register.fulfilled.type };
    expect(reducer(initialState, registerFulfilledAction)).toEqual(FETCH_STATE.fulfilled());

    // SUBMIT REJECTED
    const registerRejectedAction = { type: register.rejected.type, error };
    expect(reducer(initialState, registerRejectedAction)).toEqual(
        FETCH_STATE.rejected(initialState, registerRejectedAction)
    );

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
