import * as React from "react";
import { connect } from "react-redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import { Store } from "../../store/reducers";
import { Item } from "../../types";
import { edit, initEdit } from "./actions";
import Form from "./form";
import { EditInitStore } from "./reducers/init";
import { EditSubmitStore } from "./reducers/submit";
import { EditIsSubmittedStore } from "./reducers/submit/isSubmitted";

type Props = {
    history: any;
    initData: EditInitStore["data"];
    initError: EditInitStore["error"];
    id: string;
    isFetching: EditInitStore["isFetching"];
    isSubmitted: EditIsSubmittedStore;
    isSubmitting: EditSubmitStore["isSubmitting"];
    submitError: EditSubmitStore["error"];
    edit(values: Item): void;
    initEdit(id: string): void;
};

export const ItemsEdit = (props: Props) => {
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

const mapStateToProps = (store: Store) => ({
    initData: store.items.edit.init.data,
    initError: store.items.edit.init.error,
    isFetching: store.items.edit.init.isFetching,
    isSubmitted: store.items.edit.submit.isSubmitted,
    isSubmitting: store.items.edit.submit.isSubmitting,
    submitError: store.items.edit.submit.error,
});

export default connect(mapStateToProps, { edit, initEdit })(ItemsEdit);
