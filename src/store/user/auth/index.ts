import { get as getCookie, remove as removeCookie, set as setCookie } from "js-cookie";
import { makeAutoObservable, runInAction, set } from "mobx";

import { User } from "../../../types";
import { AuthResponse } from "../../../user/auth/types";
import { appFetch } from "../../../utils/api";

import { AuthSubmitStore } from "./submit";

export type Auth = {
    isAuthorized: boolean;
    auth: (profile: User) => void;
    logout: () => void;
};

export class AuthStore {
    isAuthorized: Auth["isAuthorized"] = false;

    submit = new AuthSubmitStore();

    constructor() {
        makeAutoObservable(this);
    }

    //eslint-disable-next-line
    auth: Auth["auth"] = async (profile) => {
        runInAction(() => {
            this.isAuthorized = false;
        });

        const token = getCookie("token");

        if (!token) {
            this.submit.error = "Token not found";
            return;
        }

        await appFetch(
            {
                data: { token },
                method: "POST",
                okFactory: (response) => {
                    const { user, token: newToken } = response as AuthResponse;
                    setCookie("token", String(newToken));

                    runInAction(() => {
                        this.isAuthorized = true;
                        set(profile, user);
                    });

                    return user;
                },
                url: "auth/",
            },
            this.submit
        );
    };

    logout: Auth["logout"] = async () => {
        const token = getCookie("token");
        await appFetch({ data: { token }, method: "POST", url: "logout" }, {});
        removeCookie("token");

        runInAction(() => {
            this.isAuthorized = false;
        });
    };
}
