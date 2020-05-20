import * as React from "react";
import { connect } from "react-redux";

import { Store } from "../../store/reducers";
import { ErrorStore } from "../../store/error";
import { IsLoadedStore } from "../../store/isLoaded";
import { add, init } from "./actions";
import Form from "./form";
import { ItemAddFormData } from "./types";

type Props = {
    error: ErrorStore;
    history: any;
    isSubmitted: IsLoadedStore;
    add(values: ItemAddFormData): void;
    init(): void;
};

export const ItemsAdd = (props: Props) => {
    const { error, history, isSubmitted, add, init } = props;

    React.useEffect(() => {
        init();
    }, [init]);

    React.useEffect(() => {
        if (!error && isSubmitted) {
            init();
            history.push("/");
        }
    }, [error, history, init, isSubmitted]);

    return <Form onSubmit={add} formError={error} />;
};

const mapStateToProps = (store: Store) => ({ ...store.items.add });

export default connect(mapStateToProps, { add, init })(ItemsAdd);
