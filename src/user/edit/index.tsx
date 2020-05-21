import * as React from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { ErrorStore } from "../../store/error";
import { IsLoadedStore } from "../../store/isLoaded";
import { Store } from "../../store/reducers";
import { edit, init } from "./actions";
import Form from "./form";
import { UserEditFormData } from "./types";

type Props = {
    error: ErrorStore;
    initialValues: UserEditFormData;
    isSubmitted: IsLoadedStore;
    edit(values: UserEditFormData): void;
    init(): void;
};

export const UserEdit = (props: Props) => {
    const { error, initialValues, isSubmitted, edit, init } = props;

    React.useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, isSubmitted, onRedirect: init, url: "/profile" });

    return <Form formError={error} initialValues={initialValues} onSubmit={edit} />;
};

const mapStateToProps = ({ user }: Store) => ({
    error: user.edit.error,
    initialValues: { email: user.profile.email },
    isSubmitted: user.edit.isSubmitted,
});

export default connect(mapStateToProps, { edit, init })(UserEdit);
