import { ITEMS_FETCH, ITEMS_FETCH_ERROR, ITEMS_FETCH_OK } from "./constants";
import { fetchItems } from "./actions";
import * as api from "../../utils/api";

const apiFetchSuccess = (): any => Promise.resolve({ json: () => Promise.resolve("test") });
const apiFetchError = (): any => {
    throw "error";
};

test("List actions", async () => {
    //ITEMS_FETCH
    const dispatch = jest.fn();
    const spy = jest.spyOn(api, "apiFetch").mockImplementation(apiFetchSuccess);
    const actionCreator = fetchItems();
    await actionCreator(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: ITEMS_FETCH });

    //Fetch
    expect(spy).toHaveBeenCalledWith("items/");

    //ITEMS_FETCH_OK
    expect(dispatch).toHaveBeenLastCalledWith({ payload: "test", type: ITEMS_FETCH_OK });

    //ITEMS_FETCH_ERROR
    spy.mockImplementation(apiFetchError);
    await actionCreator(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
        payload: { message: "Невозможно получить данные" },
        type: ITEMS_FETCH_ERROR,
    });
});
