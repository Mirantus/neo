import { FETCH_STATE } from "../../../utils/api";

import reducer, { initialState, passwordRecovery } from "./submit";

const error = "error";

test("Password recovery submit slice", () => {
    // SUBMIT PENDING
    const passwordRecoveryPendingAction = { type: passwordRecovery.pending.type };
    expect(reducer(initialState, passwordRecoveryPendingAction)).toEqual(FETCH_STATE.pending());

    // SUBMIT FULFILLED
    const passwordRecoveryFulfilledAction = { type: passwordRecovery.fulfilled.type };
    expect(reducer(initialState, passwordRecoveryFulfilledAction)).toEqual(FETCH_STATE.fulfilled());

    // SUBMIT REJECTED
    const passwordRecoveryRejectedAction = { type: passwordRecovery.rejected.type, error };
    expect(reducer(initialState, passwordRecoveryRejectedAction)).toEqual(
        FETCH_STATE.rejected(initialState, passwordRecoveryRejectedAction)
    );

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
