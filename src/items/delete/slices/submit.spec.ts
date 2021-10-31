import { FETCH_STATE } from "../../../utils/api";

import reducer, { initialState, deleteItem } from "./submit";

const error = "error";

test("Items delete submit slice", () => {
    // DELETE PENDING
    const deletePendingAction = { type: deleteItem.pending.type };
    expect(reducer(initialState, deletePendingAction)).toEqual(FETCH_STATE.pending());

    // DELETE FULFILLED
    const deleteFulfilledAction = { type: deleteItem.fulfilled.type };
    expect(reducer(initialState, deleteFulfilledAction)).toEqual(FETCH_STATE.fulfilled());

    // DELETE REJECTED
    const deleteRejectedAction = { type: deleteItem.rejected.type, error };
    expect(reducer(initialState, deleteRejectedAction)).toEqual(
        FETCH_STATE.rejected(initialState, deleteRejectedAction)
    );

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
