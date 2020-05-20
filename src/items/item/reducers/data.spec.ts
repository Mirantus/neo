import { OK } from "../../../store/constants";
import { ITEM_FETCH } from "../constants";
import reducer, { initialState } from "./data";

test("Item reducer data", () => {
    // ITEM_FETCH
    const fetchAction = { type: ITEM_FETCH, payload: null };
    expect(reducer(initialState, fetchAction)).toBe(initialState);

    // ITEM_FETCH_OK
    const fetchOkAction = { type: ITEM_FETCH + OK, payload: "payload" };
    expect(reducer(initialState, fetchOkAction)).toBe(fetchOkAction.payload);

    // default
    const otherAction = { type: "test", payload: "payload22" };
    expect(reducer(initialState, otherAction)).toBe(initialState);
});
