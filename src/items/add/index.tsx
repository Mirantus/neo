import * as React from "react";
import { connect } from "react-redux";

import { IStore } from "../../store/reducers";
import { IItem } from "../../types";
import { add, initAdd } from "./actions";
import Form from "./form";
import { IAddErrorStore } from "./reducers/error";
import { IAddIsSubmittedStore } from "./reducers/isSubmitted";

interface IProps {
    error: IAddErrorStore;
    history: any;
    isSubmitted: IAddIsSubmittedStore;
    add(values: IItem): void;
    initAdd(): void;
}

export const ItemsAdd = (props: IProps) => {
    const { error, history, isSubmitted, add, initAdd } = props;

    React.useEffect(() => {
        initAdd();
    }, []);

    React.useEffect(() => {
        if (!error && isSubmitted) {
            initAdd();
            history.push("/");
        }
    }, [error, isSubmitted]);

    return <Form onSubmit={add} formError={error} />;
};

const mapStateToProps = (store: IStore) => ({ ...store.items.add });

export default connect(mapStateToProps, { add, initAdd })(ItemsAdd);
