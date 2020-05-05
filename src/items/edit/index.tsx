import * as React from "react";
import { connect } from "react-redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import { IStore } from "../../store/reducers";
import { IItem } from "../../types";
import { edit, initEdit } from "./actions";
import Form from "./form";
import { IEditInitStore } from "./reducers/init";
import { IEditSubmitStore } from "./reducers/submit";
import { IEditIsSubmittedStore } from "./reducers/submit/isSubmitted";

type IProps = {
    history: any;
    initData: IEditInitStore["data"];
    initError: IEditInitStore["error"];
    id: string;
    isFetching: IEditInitStore["isFetching"];
    isSubmitted: IEditIsSubmittedStore;
    isSubmitting: IEditSubmitStore["isSubmitting"];
    submitError: IEditSubmitStore["error"];
    edit(values: IItem): void;
    initEdit(id: string): void;
};

export const ItemsEdit = (props: IProps) => {
    const {
        history,
        initData,
        id,
        isFetching,
        isSubmitted,
        isSubmitting,
        submitError,
        initError,
        edit,
        initEdit,
    } = props;

    React.useEffect(() => {
        initEdit(id);
    }, [id, initEdit]);

    React.useEffect(() => {
        if (!submitError && isSubmitted && initData) {
            initEdit(id);
            history.push(`/items/${initData.id}`);
        }
    }, [history, id, initData, initEdit, submitError, isSubmitted]);

    if (isFetching) {
        return <Loader />;
    }

    if (initError) {
        return <Error message={initError} />;
    }

    if (initData) {
        return <Form initialValues={initData} isSubmitting={isSubmitting} onSubmit={edit} formError={submitError} />;
    }

    return null;
};

const mapStateToProps = (store: IStore) => ({
    initData: store.items.edit.init.data,
    initError: store.items.edit.init.error,
    isFetching: store.items.edit.init.isFetching,
    isSubmitted: store.items.edit.submit.isSubmitted,
    isSubmitting: store.items.edit.submit.isSubmitting,
    submitError: store.items.edit.submit.error,
});

export default connect(mapStateToProps, { edit, initEdit })(ItemsEdit);
