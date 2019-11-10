import { ITEMS_FETCH, ITEMS_FETCH_OK } from "../constants";
import reducer, { initialState } from "./data";

test("List reducer data", () => {
    //ITEMS_FETCH
    const fetchAction = { type: ITEMS_FETCH, payload: null };
    expect(reducer(initialState, fetchAction)).toBe(initialState);

    //ITEMS_FETCH_OK
    const fetchOkAction = { type: ITEMS_FETCH_OK, payload: ["payload"] };
    expect(reducer(initialState, fetchOkAction)).toEqual(fetchOkAction.payload);

    //default
    const otherAction = { type: "test", payload: ["payload2"] };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
