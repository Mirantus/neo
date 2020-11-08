import React, { useEffect } from "react";
import { connect } from "react-redux";

import useSubmitRedirect from "../../hooks/useSubmitRedirect";
import { ErrorStore } from "../../store/error";
import { IsLoadedStore } from "../../store/isLoaded";
import { Store } from "../../store/reducers";

import { add, init } from "./actions";
import Form from "./form";
import { ItemAddFormData } from "./types";

type Props = {
    error: ErrorStore;
    isSubmitted: IsLoadedStore;
    add(values: ItemAddFormData): void;
    init(): void;
};

export const ItemsAdd = (props: Props) => {
    const { error, isSubmitted, add, init } = props;

    useEffect(() => {
        init();
    }, [init]);

    useSubmitRedirect({ error, isSubmitted, onRedirect: init, url: "/" });

    return <Form onSubmit={add} formError={error} />;
};

const mapStateToProps = (store: Store) => ({ ...store.items.add });

export default connect(mapStateToProps, { add, init })(ItemsAdd);
