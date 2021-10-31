import { FETCH_STATE } from "../../../utils/api";

import reducer, { initialState, submit } from "./submit";

const error = "error";

test("User edit submit slice", () => {
    // SUBMIT PENDING
    const userEditPendingAction = { type: submit.pending.type };
    expect(reducer(initialState, userEditPendingAction)).toEqual(FETCH_STATE.pending());

    // SUBMIT FULFILLED
    const userEditFulfilledAction = { type: submit.fulfilled.type };
    expect(reducer(initialState, userEditFulfilledAction)).toEqual(FETCH_STATE.fulfilled());

    // SUBMIT REJECTED
    const userEditRejectedAction = { type: submit.rejected.type, error };
    expect(reducer(initialState, userEditRejectedAction)).toEqual(
        FETCH_STATE.rejected(initialState, userEditRejectedAction)
    );

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
