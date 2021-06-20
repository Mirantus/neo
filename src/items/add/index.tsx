import React, { useEffect } from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { Store } from "../../store/index";
import { ErrorStore, IsLoadedStore } from "../../types";

import Form from "./form";
import { add, init } from "./slices/submit";
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

const mapStateToProps = (store: Store) => ({ ...store.items.add.submit });

export default connect(mapStateToProps, { add, init })(ItemsAdd);
