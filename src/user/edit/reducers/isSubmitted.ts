import { UserEditAction } from "../actions";
import { USER_EDIT, USER_EDIT_ERROR, USER_EDIT_INIT, USER_EDIT_OK } from "../constants";

export type UserEditIsSubmittedStore = boolean;

export const initialState = false;

export default (state: UserEditIsSubmittedStore = initialState, action: UserEditAction): UserEditIsSubmittedStore => {
    switch (action.type) {
        case USER_EDIT_INIT:
        case USER_EDIT:
            return false;
        case USER_EDIT_OK:
        case USER_EDIT_ERROR:
            return true;
        default:
            return state;
    }
};
