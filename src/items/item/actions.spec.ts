import { ITEM_FETCH, ITEM_FETCH_ERROR, ITEM_FETCH_OK } from "./constants";
import { fetchItem } from "./actions";
import * as api from "../../utils/api";

const apiFetchSuccess = (): any => Promise.resolve({ json: () => Promise.resolve("test") });
const apiFetchError = (): any => {
    throw "error";
};

test("Item actions", async () => {
    //ITEM_FETCH
    const id = "id";
    const dispatch = jest.fn();
    const spy = jest.spyOn(api, "apiFetch").mockImplementation(apiFetchSuccess);
    const actionCreator = fetchItem(id);
    await actionCreator(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: ITEM_FETCH });

    //Fetch
    expect(spy).toHaveBeenCalledWith(`items/${id}`);

    //ITEM_FETCH_OK
    expect(dispatch).toHaveBeenLastCalledWith({ payload: "test", type: ITEM_FETCH_OK });

    //ITEM_FETCH_ERROR
    spy.mockImplementation(apiFetchError);
    await actionCreator(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
        payload: { message: "Невозможно получить данные" },
        type: ITEM_FETCH_ERROR,
    });
});
