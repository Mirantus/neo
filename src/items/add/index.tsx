import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import store from "../../store";
import { ErrorStore, IsLoadedStore } from "../../types";

import Form from "./form";
import { ItemAddFormData } from "./types";

type Props = {
    error: ErrorStore;
    settled: IsLoadedStore;
    add(values: ItemAddFormData): void;
    init(): void;
};

export const ItemsAdd = (props: Props) => {
    const { error, settled, add, init } = props;

    useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, settled, onRedirect: init, url: "/" });

    return <Form onSubmit={add} formError={error} />;
};

export default observer(() => (
    <ItemsAdd
        add={store.items.add.submit.add}
        error={store.items.add.submit.error}
        init={store.items.add.submit.init}
        settled={store.items.add.submit.settled}
    />
));
