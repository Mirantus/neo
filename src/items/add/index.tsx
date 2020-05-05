import * as React from "react";
import { connect } from "react-redux";

import { Store } from "../../store/reducers";
import { add, initAdd } from "./actions";
import Form from "./form";
import { AddErrorStore } from "./reducers/error";
import { AddIsSubmittedStore } from "./reducers/isSubmitted";
import { ItemAddFormData } from "./types";

type Props = {
    error: AddErrorStore;
    history: any;
    isSubmitted: AddIsSubmittedStore;
    add(values: ItemAddFormData): void;
    initAdd(): void;
};

export const ItemsAdd = (props: Props) => {
    const { error, history, isSubmitted, add, initAdd } = props;

    React.useEffect(() => {
        initAdd();
    }, [initAdd]);

    React.useEffect(() => {
        if (!error && isSubmitted) {
            initAdd();
            history.push("/");
        }
    }, [error, history, initAdd, isSubmitted]);

    return <Form onSubmit={add} formError={error} />;
};

const mapStateToProps = (store: Store) => ({ ...store.items.add });

export default connect(mapStateToProps, { add, initAdd })(ItemsAdd);
