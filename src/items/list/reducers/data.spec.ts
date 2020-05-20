import { OK } from "../../../store/constants";
import { ITEMS_DELETE } from "../../delete/constants";
import { ITEMS_FETCH } from "../constants";
import reducer, { initialState } from "./data";

test("List reducer data", () => {
    // ITEMS_FETCH
    const fetchAction = { type: ITEMS_FETCH, payload: null };
    expect(reducer(initialState, fetchAction)).toBe(initialState);

    // ITEMS_FETCH_OK
    const fetchOkAction = { type: ITEMS_FETCH + OK, payload: ["payload"] };
    expect(reducer(initialState, fetchOkAction)).toEqual(fetchOkAction.payload);

    // ITEMS_DELETE_OK
    const deleteOkAction = { type: ITEMS_DELETE + OK, payload: { id: "2" } };
    const item = { date: "", id: "", text: "", user_id: "" };
    const deleteInitialState = [
        { ...item, id: "1" },
        { ...item, id: "2" },
        { ...item, id: "3" },
    ];
    const result = reducer(deleteInitialState, deleteOkAction);
    expect(result.length).toEqual(2);
    expect(result.find((item) => item.id === "2")).toEqual(undefined);

    // default
    const otherAction = { type: "test", payload: ["payload2"] };
    expect(reducer(initialState, otherAction)).toEqual(initialState);
});
