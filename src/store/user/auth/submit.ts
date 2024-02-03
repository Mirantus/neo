import { ErrorStore, IsLoadingStore } from "types";

export type AuthSubmit = {
    //     data: null;
    pending: IsLoadingStore;
    error: ErrorStore;
};

export class AuthSubmitStore {
    pending: AuthSubmit["pending"] = false;

    error: AuthSubmit["error"] = null;
}
