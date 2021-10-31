import { FETCH_STATE } from "../../../utils/api";

import reducer, { initialState, itemsEditSubmit } from "./submit";

const error = "error";

test("Items edit submit slice", () => {
    // SUBMIT PENDING
    const addPendingAction = { type: itemsEditSubmit.pending.type };
    expect(reducer(initialState, addPendingAction)).toEqual(FETCH_STATE.pending());

    // SUBMIT FULFILLED
    const addFulfilledAction = { type: itemsEditSubmit.fulfilled.type };
    expect(reducer(initialState, addFulfilledAction)).toEqual(FETCH_STATE.fulfilled());

    // SUBMIT REJECTED
    const addRejectedAction = { type: itemsEditSubmit.rejected.type, error };
    expect(reducer(initialState, addRejectedAction)).toEqual(FETCH_STATE.rejected(initialState, addRejectedAction));

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
