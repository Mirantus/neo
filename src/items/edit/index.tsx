import React, { useEffect } from "react";
import { connect } from "react-redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { Store } from "../../store/index";
import { Item } from "../../types";

import Form from "./form";
import { itemsEditInit, EditInitStore } from "./slices/init";
import { itemsEditSubmit, EditSubmitStore } from "./slices/submit";

type Props = {
    init: EditInitStore;
    id: string;
    submit: EditSubmitStore;
    itemsEditInit(id: string): void;
    itemsEditSubmit(values: Item): void;
};

export const ItemsEdit = (props: Props) => {
    const { init, id, submit, itemsEditInit, itemsEditSubmit } = props;

    useEffect(() => {
        itemsEditInit(id);
    }, [id, itemsEditInit]);

    useSubmitRedirect({
        error: submit.error,
        settled: submit.settled,
        onRedirect: () => itemsEditInit(id),
        url: `/items/${init.data?.id}`,
    });

    if (init.pending) {
        return <Loader />;
    }

    if (init.error) {
        return <Error message={init.error} />;
    }

    if (init.data) {
        return (
            <Form
                initialValues={init.data}
                pending={submit.pending}
                onSubmit={itemsEditSubmit}
                formError={submit.error}
            />
        );
    }

    return null;
};

const mapStateToProps = (store: Store) => ({
    init: store.items.edit.init,
    submit: store.items.edit.submit,
});

export default connect(mapStateToProps, { itemsEditInit, itemsEditSubmit })(ItemsEdit);
