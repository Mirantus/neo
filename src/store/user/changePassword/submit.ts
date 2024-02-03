import { makeAutoObservable } from "mobx";
import { ErrorStore, IsLoadingStore } from "types";

import { ChangePasswordFormData } from "../../../user/changePassword/types";
import { appFetch } from "../../../utils/api";

export type ChangePasswordSubmit = {
    pending: IsLoadingStore;
    error: ErrorStore;
    settled: boolean;
    init: () => void;
    submit: (values: ChangePasswordFormData) => void;
};

export class ChangePasswordSubmitStore {
    pending: ChangePasswordSubmit["pending"] = false;

    error: ChangePasswordSubmit["error"] = null;

    settled: ChangePasswordSubmit["settled"] = false;

    constructor() {
        makeAutoObservable(this);
    }

    init: ChangePasswordSubmit["init"] = () => {
        this.error = null;
        this.pending = false;
        this.settled = false;
    };

    //eslint-disable-next-line
    submit: ChangePasswordSubmit["submit"] = async (values) => {
        appFetch(
            {
                data: values,
                method: "POST",
                url: "change_password",
            },
            this
        );
    };
}
