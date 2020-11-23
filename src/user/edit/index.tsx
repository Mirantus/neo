import React, { useEffect } from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { Store } from "../../store/index";
import { ErrorStore, IsLoadedStore } from "../../types";

import Form from "./form";
import { submit, init } from "./slice";
import { UserEditFormData } from "./types";

type Props = {
    error: ErrorStore;
    initialValues: UserEditFormData;
    isSubmitted: IsLoadedStore;
    submit(values: UserEditFormData): void;
    init(): void;
};

export const UserEdit = (props: Props) => {
    const { error, initialValues, isSubmitted, init, submit } = props;

    useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, isSubmitted, onRedirect: init, url: "/profile" });

    return <Form formError={error} initialValues={initialValues} onSubmit={submit} />;
};

const mapStateToProps = ({ user }: Store) => ({
    error: user.edit.error,
    initialValues: { email: user.profile.email },
    isSubmitted: user.edit.isSubmitted,
});

export default connect(mapStateToProps, { init, submit })(UserEdit);
