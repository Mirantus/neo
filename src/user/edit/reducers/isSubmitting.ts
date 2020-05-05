import { UserEditAction } from "../actions";
import { USER_EDIT, USER_EDIT_ERROR, USER_EDIT_OK } from "../constants";

export type UserEditIsSubmittingStore = boolean;

export const initialState = false;

export default (state: UserEditIsSubmittingStore = initialState, action: UserEditAction): UserEditIsSubmittingStore => {
    switch (action.type) {
        case USER_EDIT:
            return true;
        case USER_EDIT_OK:
        case USER_EDIT_ERROR:
            return initialState;
        default:
            return state;
    }
};
