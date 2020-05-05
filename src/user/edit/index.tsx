import * as React from "react";
import { connect } from "react-redux";

import { IStore } from "../../store/reducers";
import { edit, init } from "./actions";
import Form from "./form";
import { IUserEditErrorStore } from "./reducers/error";
import { IUserEditIsSubmittedStore } from "./reducers/isSubmitted";
import { IUserEdit } from "./types";

type IProps = {
    error: IUserEditErrorStore;
    history: any;
    initialValues: IUserEdit;
    isSubmitted: IUserEditIsSubmittedStore;
    edit(values: IUserEdit): void;
    init(): void;
};

export const UserEdit = (props: IProps) => {
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

const mapStateToProps = ({ user }: IStore) => ({
    error: user.edit.error,
    initialValues: { email: user.profile.email },
    isSubmitted: user.edit.isSubmitted,
});

export default connect(mapStateToProps, { edit, init })(UserEdit);
