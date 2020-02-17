import { REGISTER_INIT, REGISTER, REGISTER_OK, REGISTER_ERROR } from "./constants";
import { initRegister, register } from "./actions";
import * as api from "../../utils/api";

const errorMessage = "error";
const fetchSuccess = (): any => Promise.resolve("success");
const fetchError = (): any => Promise.reject(errorMessage);

test("Register actions", async () => {
    //REGISTER_INIT
    expect(initRegister()).toStrictEqual({ type: REGISTER_INIT });

    //REGISTER
    const values = { email: "test@domain.com", password: "123" };
    const dispatch = jest.fn();
    const spy = jest.spyOn(api, "fetch").mockImplementation(fetchSuccess);
    const actionCreator = register(values);
    await actionCreator(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: REGISTER });

    //Fetch
    expect(spy).toHaveBeenCalledWith("register/", "POST", values);

    //REGISTER_OK
    expect(dispatch).toHaveBeenLastCalledWith({ payload: { email: values.email }, type: REGISTER_OK });

    //REGISTER_ERROR
    spy.mockImplementation(fetchError);
    await actionCreator(dispatch);
    expect(dispatch).toHaveBeenLastCalledWith({
        payload: errorMessage,
        type: REGISTER_ERROR,
    });
});
