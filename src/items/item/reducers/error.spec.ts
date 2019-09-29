import { ITEM_FETCH, ITEM_FETCH_ERROR } from "../constants";
import reducer, { initialState } from "./error";

test("Item reducer error", () => {
    //ITEM_FETCH
    const fetchAction = { type: ITEM_FETCH, payload: null };
    expect(reducer(initialState, fetchAction)).toBe(initialState);

    //ITEM_FETCH_ERROR
    const errorFetchPayload = { id: "test1" };
    const errorFetchAction = { type: ITEM_FETCH_ERROR, payload: errorFetchPayload };
    expect(reducer(initialState, errorFetchAction)).toEqual(errorFetchPayload);

    //default
    const otherAction = { type: "test2", payload: { id: "test2" } };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
