import reducer, { initialState, fetchItems } from "./init";

const error = "error";
const data = [
    {
        id: "20",
        text: "1",
        date: "2020-11-28",
        user_id: "7",
    },
];

test("Items list init slice", () => {
    // ADD PENDING
    const initPendingAction = { type: fetchItems.pending.type };
    expect(reducer(initialState, initPendingAction)).toEqual({ ...initialState, pending: true });

    // ADD FULFILLED
    const initFulfilledAction = { type: fetchItems.fulfilled.type, payload: data };
    expect(reducer(initialState, initFulfilledAction)).toEqual({ ...initialState, data });

    // ADD REJECTED
    const initRejectedAction = { type: fetchItems.rejected.type, payload: error };
    expect(reducer(initialState, initRejectedAction)).toEqual({ ...initialState, error });

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
