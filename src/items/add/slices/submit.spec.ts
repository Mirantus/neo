import { FETCH_STATE } from "../../../utils/api";

import reducer, { initialState, add, init } from "./submit";

const error = "error";

test("Items add submit slice", () => {
    // INIT
    const initAction = { type: init.type };
    expect(reducer(initialState, initAction)).toBe(initialState);

    // ADD PENDING
    const addPendingAction = { type: add.pending.type };
    expect(reducer(initialState, addPendingAction)).toEqual(FETCH_STATE.pending());

    // ADD FULFILLED
    const addFulfilledAction = { type: add.fulfilled.type };
    expect(reducer(initialState, addFulfilledAction)).toEqual(FETCH_STATE.fulfilled());

    // ADD REJECTED
    const addRejectedAction = { type: add.rejected.type, error };
    expect(reducer(initialState, addRejectedAction)).toEqual(FETCH_STATE.rejected(initialState, addRejectedAction));

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
