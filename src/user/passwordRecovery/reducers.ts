import { combineReducers } from "redux";

import createError, { ErrorStore } from "../../store/error";
import createIsLoading, { IsLoadingStore } from "../../store/isLoading";
import createIsLoaded, { IsLoadedStore } from "../../store/isLoaded";
import { PASSWORD_RECOVERY } from "./constants";

export interface PasswordRecoveryStore {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    isSubmitting: IsLoadingStore;
}

export default combineReducers({
    error: createError(PASSWORD_RECOVERY),
    isSubmitted: createIsLoaded(PASSWORD_RECOVERY),
    isSubmitting: createIsLoading(PASSWORD_RECOVERY),
});