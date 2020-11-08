import { get as getCookie } from "js-cookie";
import { Dispatch } from "redux";

import { createFetch } from "../../store/actions";
import { INIT } from "../../store/constants";

import { USER_EDIT } from "./constants";
import { UserEditFormData } from "./types";

export const init = () => ({ type: USER_EDIT + INIT });

export const edit = (values: UserEditFormData) => async (dispatch: Dispatch) => {
    const token = getCookie("token");
    await createFetch({ actionType: USER_EDIT, data: { ...values, token }, method: "POST", url: "user/edit/" })(
        dispatch
    );
};
