import { set as setCookie } from "js-cookie";
import { makeAutoObservable, runInAction, set } from "mobx";
import { ErrorStore, IsLoadingStore } from "types";

import { User } from "../../../types";
import { UserRegisterFormData } from "../../../user/register/types";
import { appFetch } from "../../../utils/api";
import store from "../../index";

export type RegisterSubmit = {
    pending: IsLoadingStore;
    error: ErrorStore;
    settled: boolean;
    init: () => void;
    register: (values: UserRegisterFormData, profile: User) => void;
};

export class RegisterSubmitStore {
    pending: RegisterSubmit["pending"] = false;

    error: RegisterSubmit["error"] = null;

    settled: RegisterSubmit["settled"] = false;

    constructor() {
        makeAutoObservable(this);
    }

    init: RegisterSubmit["init"] = () => {
        this.error = null;
        this.pending = false;
        this.settled = false;
    };

    //eslint-disable-next-line
    register: RegisterSubmit["register"] = async (values, profile) => {
        appFetch(
            {
                data: values,
                method: "POST",
                url: "register/",
                okFactory: ({ token, user }) => {
                    setCookie("token", String(token));
                    store.user.auth.isAuthorized = true;

                    runInAction(() => {
                        set(profile, user);
                    });
                },
            },
            this
        );
    };
}
