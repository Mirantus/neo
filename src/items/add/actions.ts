import { Dispatch } from "redux";

import { createFetch } from "../../store/actions";
import { INIT } from "../../store/constants";
import { Item } from "../../types";

import { ITEMS_ADD } from "./constants";

export const init = () => ({ type: ITEMS_ADD + INIT });

export const add = (values: Item) => async (dispatch: Dispatch) => {
    await createFetch({ actionType: ITEMS_ADD, data: values, method: "POST", url: "items/add" })(dispatch);
};
