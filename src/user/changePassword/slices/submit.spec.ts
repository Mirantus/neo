import { FETCH_STATE } from "../../../utils/api";

import reducer, { initialState, changePassword } from "./submit";

const error = "error";

test("Change password submit slice", () => {
    // SUBMIT PENDING
    const changePasswordPendingAction = { type: changePassword.pending.type };
    expect(reducer(initialState, changePasswordPendingAction)).toEqual(FETCH_STATE.pending());

    // SUBMIT FULFILLED
    const changePasswordFulfilledAction = { type: changePassword.fulfilled.type };
    expect(reducer(initialState, changePasswordFulfilledAction)).toEqual(FETCH_STATE.fulfilled());

    // SUBMIT REJECTED
    const changePasswordRejectedAction = { type: changePassword.rejected.type, error };
    expect(reducer(initialState, changePasswordRejectedAction)).toEqual(
        FETCH_STATE.rejected(initialState, changePasswordRejectedAction)
    );

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
