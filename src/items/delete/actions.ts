import { Dispatch } from "redux";

import { createFetch } from "../../store/actions";

import { ITEMS_DELETE } from "./constants";

export const deleteItem = (id: string) => async (dispatch: Dispatch) => {
    await createFetch({
        actionType: ITEMS_DELETE,
        global: true,
        data: { id },
        method: "POST",
        url: "items/delete",
    })(dispatch);
};
