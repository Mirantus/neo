import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

import Error from "../../components/error";
import Loader from "../../components/loader";
import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import store from "../../store";
import { ItemsEditInit } from "../../store/items/edit/init";
import { ItemsEditSubmit } from "../../store/items/edit/submit";

import Form from "./form";
import { ItemEditFormData } from "./types";

type Props = {
    init: ItemsEditInit;
    id: string;
    submit: ItemsEditSubmit;
    itemsEditInit(id: string): void;
    itemsEditSubmit(values: ItemEditFormData): void;
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

export default observer(({ id }: { id: string }) => (
    <ItemsEdit
        id={id}
        init={{ ...store.items.edit.init }}
        submit={{ ...store.items.edit.submit }}
        itemsEditInit={store.items.edit.init.itemsEditInit}
        itemsEditSubmit={store.items.edit.submit.itemsEditSubmit}
    />
));
