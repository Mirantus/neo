import React, { useEffect } from "react";
import { connect } from "react-redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { Store } from "../../store/index";
import { IsLoadingStore, Item } from "../../types";

import Form from "./form";
import { init, EditInitStore } from "./slices/init";
import { submit, EditSubmitStore } from "./slices/submit";

type Props = {
    initData: EditInitStore["data"];
    initError: EditInitStore["error"];
    id: string;
    isFetching: EditInitStore["isFetching"];
    isSubmitted: IsLoadingStore;
    isSubmitting: EditSubmitStore["isSubmitting"];
    submitError: EditSubmitStore["error"];
    init(id: string): void;
    submit(values: Item): void;
};

export const ItemsEdit = (props: Props) => {
    const { initData, id, isFetching, isSubmitted, isSubmitting, submitError, initError, init, submit } = props;

    useEffect(() => {
        init(id);
    }, [id, init]);

    useSubmitRedirect({
        error: submitError,
        isSubmitted: isSubmitted,
        onRedirect: () => init(id),
        url: `/items/${initData?.id}`,
    });

    if (isFetching) {
        return <Loader />;
    }

    if (initError) {
        return <Error message={initError} />;
    }

    if (initData) {
        return <Form initialValues={initData} isSubmitting={isSubmitting} onSubmit={submit} formError={submitError} />;
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

export default connect(mapStateToProps, { init, submit })(ItemsEdit);
