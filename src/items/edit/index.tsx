import * as React from "react";
import { connect } from "react-redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import { IsLoadingStore } from "../../store/isLoading";
import { Store } from "../../store/reducers";
import { Item } from "../../types";
import { edit, init } from "./actions";
import Form from "./form";
import { EditInitStore } from "./reducers/init";
import { EditSubmitStore } from "./reducers/submit";

type Props = {
    history: any;
    initData: EditInitStore["data"];
    initError: EditInitStore["error"];
    id: string;
    isFetching: EditInitStore["isFetching"];
    isSubmitted: IsLoadingStore;
    isSubmitting: EditSubmitStore["isSubmitting"];
    submitError: EditSubmitStore["error"];
    edit(values: Item): void;
    init(id: string): void;
};

export const ItemsEdit = (props: Props) => {
    const { history, initData, id, isFetching, isSubmitted, isSubmitting, submitError, initError, edit, init } = props;

    React.useEffect(() => {
        init(id);
    }, [id, init]);

    React.useEffect(() => {
        if (!submitError && isSubmitted && initData) {
            init(id);
            history.push(`/items/${initData.id}`);
        }
    }, [history, id, initData, init, submitError, isSubmitted]);

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

export default connect(mapStateToProps, { edit, init })(ItemsEdit);
