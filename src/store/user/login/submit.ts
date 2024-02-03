import { set as setCookie } from "js-cookie";
import { makeAutoObservable, runInAction, set } from "mobx";
import { ErrorStore, IsLoadingStore } from "types";

import { User } from "../../../types";
import { UserLoginFormData } from "../../../user/login/types";
import { appFetch } from "../../../utils/api";
import store from "../../index";

export type LoginSubmit = {
    data: null;
    pending: IsLoadingStore;
    error: ErrorStore;
    settled: boolean;
    init: () => void;
    login: (values: UserLoginFormData, profile: User) => void;
};

export class LoginSubmitStore {
    data: LoginSubmit["data"] = null;

    pending: LoginSubmit["pending"] = false;

    error: LoginSubmit["error"] = null;

    settled: LoginSubmit["settled"] = false;

    constructor() {
        makeAutoObservable(this);
    }

    init: LoginSubmit["init"] = () => {
        this.error = null;
        this.pending = false;
        this.settled = false;
    };

    //eslint-disable-next-line
    login: LoginSubmit["login"] = async (values, profile) => {
        appFetch(
            {
                data: values,
                method: "POST",
                url: "login/",
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
