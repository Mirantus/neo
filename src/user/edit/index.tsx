import React, { useEffect } from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { Store } from "../../store/index";
import { ErrorStore, IsLoadedStore } from "../../types";

import Form from "./form";
import { submit, init } from "./slices/submit";
import { UserEditFormData } from "./types";

type Props = {
    error: ErrorStore;
    initialValues: UserEditFormData;
    settled: IsLoadedStore;
    submit(values: UserEditFormData): void;
    init(): void;
};

export const UserEdit = (props: Props) => {
    const { error, initialValues, settled, init, submit } = props;

    useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, settled, onRedirect: init, url: "/profile" });

    return <Form formError={error} initialValues={initialValues} onSubmit={submit} />;
};

const mapStateToProps = ({ user }: Store) => ({
    error: user.edit.submit.error,
    initialValues: { email: user.profile.email },
    settled: user.edit.submit.settled,
});

export default connect(mapStateToProps, { init, submit })(UserEdit);
