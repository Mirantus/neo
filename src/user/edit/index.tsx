import * as React from "react";
import { connect } from "react-redux";

import { ErrorStore } from "../../store/error";
import { IsLoadedStore } from "../../store/isLoaded";
import { Store } from "../../store/reducers";
import { edit, init } from "./actions";
import Form from "./form";
import { UserEditFormData } from "./types";

type Props = {
    error: ErrorStore;
    history: any;
    initialValues: UserEditFormData;
    isSubmitted: IsLoadedStore;
    edit(values: UserEditFormData): void;
    init(): void;
};

export const UserEdit = (props: Props) => {
    const { error, history, initialValues, isSubmitted, edit, init } = props;

    React.useEffect(() => {
        init();
    }, [init]);

    React.useEffect(() => {
        if (!error && isSubmitted) {
            init();
            history.push("/profile");
        }
    }, [error, history, init, isSubmitted]);

    return <Form formError={error} initialValues={initialValues} onSubmit={edit} />;
};

const mapStateToProps = ({ user }: Store) => ({
    error: user.edit.error,
    initialValues: { email: user.profile.email },
    isSubmitted: user.edit.isSubmitted,
});

export default connect(mapStateToProps, { edit, init })(UserEdit);
