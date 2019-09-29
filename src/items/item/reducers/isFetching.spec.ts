import { ITEM_FETCH, ITEM_FETCH_ERROR, ITEM_FETCH_OK } from "../constants";
import reducer, { initialState } from "./isFetching";

test("Item reducer isFetching", () => {
    //ITEM_FETCH
    const fetchAction = { type: ITEM_FETCH, payload: null };
    expect(reducer(initialState, fetchAction)).toBe(true);

    //ITEM_FETCH_ERROR
    const errorFetchAction = { type: ITEM_FETCH_ERROR, payload: true };
    expect(reducer(initialState, errorFetchAction)).toBe(false);

    //ITEM_FETCH_OK
    const orFetchAction = { type: ITEM_FETCH_OK, payload: true };
    expect(reducer(initialState, orFetchAction)).toBe(false);

    //default
    const otherAction = { type: "test2", payload: true };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
