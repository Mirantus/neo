import { makeAutoObservable } from "mobx";
import { ErrorStore, IsLoadingStore } from "types";

import { PasswordRecoveryFormData } from "../../../user/passwordRecovery/types";
import { appFetch } from "../../../utils/api";
import store from "../../index";

export type PasswordRecoverySubmit = {
    pending: IsLoadingStore;
    error: ErrorStore;
    settled: boolean;
    init: () => void;
    submit: (values: PasswordRecoveryFormData) => void;
};

export class PasswordRecoverySubmitStore {
    pending: PasswordRecoverySubmit["pending"] = false;

    error: PasswordRecoverySubmit["error"] = null;

    settled: PasswordRecoverySubmit["settled"] = false;

    constructor() {
        makeAutoObservable(this);
    }

    init: PasswordRecoverySubmit["init"] = () => {
        this.error = null;
        this.pending = false;
        this.settled = false;
    };

    //eslint-disable-next-line
    submit: PasswordRecoverySubmit["submit"] = async (values) => {
        appFetch(
            {
                data: values,
                method: "GET",
                url: "password_recovery",
                okFactory: () => {
                    store.message.messageShow("Новый пароль отправлен на указанный email", "success");
                },
            },
            this
        );
    };
}
