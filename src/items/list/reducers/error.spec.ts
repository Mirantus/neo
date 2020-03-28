import { ITEMS_FETCH, ITEMS_FETCH_ERROR } from "../constants";
import reducer, { initialState } from "./error";

test("List reducer error", () => {
    // ITEMS_FETCH
    const fetchAction = { type: ITEMS_FETCH, payload: null };
    expect(reducer(initialState, fetchAction)).toBe(initialState);

    // ITEMS_FETCH_ERROR
    const errorFetchPayload = { id: "test1" };
    const errorFetchAction = { type: ITEMS_FETCH_ERROR, payload: errorFetchPayload };
    expect(reducer(initialState, errorFetchAction)).toEqual(errorFetchPayload);

    // default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
