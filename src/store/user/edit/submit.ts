import { makeAutoObservable, runInAction, set } from "mobx";
import { ErrorStore, IsLoadingStore } from "types";

import { User } from "../../../types";
import { UserEditFormData } from "../../../user/edit/types";
import { appFetch } from "../../../utils/api";

export type UserEditSubmit = {
    pending: IsLoadingStore;
    error: ErrorStore;
    settled: boolean;
    init: () => void;
    submit: (values: UserEditFormData, profile: User) => void;
};

export class UserEditSubmitStore {
    pending: UserEditSubmit["pending"] = false;

    error: UserEditSubmit["error"] = null;

    settled: UserEditSubmit["settled"] = false;

    constructor() {
        makeAutoObservable(this);
    }

    init: UserEditSubmit["init"] = () => {
        this.error = null;
        this.pending = false;
        this.settled = false;
    };

    //eslint-disable-next-line
    submit: UserEditSubmit["submit"] = async (values, profile) => {
        appFetch(
            {
                data: values,
                method: "POST",
                url: "user/edit/",
                okFactory: (user) => {
                    runInAction(() => {
                        set(profile, { ...profile, ...user });
                    });
                },
            },
            this
        );
    };
}
