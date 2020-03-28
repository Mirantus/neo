import { ITEMS_FETCH, ITEMS_FETCH_ERROR, ITEMS_FETCH_OK } from "../constants";
import reducer, { initialState } from "./isFetching";

test("Item reducer isFetching", () => {
    // ITEMS_FETCH
    const fetchAction = { type: ITEMS_FETCH, payload: null };
    expect(reducer(initialState, fetchAction)).toBe(true);

    // ITEMS_FETCH_ERROR
    const errorFetchAction = { type: ITEMS_FETCH_ERROR, payload: true };
    expect(reducer(initialState, errorFetchAction)).toBe(false);

    // ITEMS_FETCH_OK
    const orFetchAction = { type: ITEMS_FETCH_OK, payload: true };
    expect(reducer(initialState, orFetchAction)).toBe(false);

    // default
    const otherAction = { type: "test2", payload: true };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
