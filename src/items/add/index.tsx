import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { IStore } from "../../store/reducers";
import { IItem } from "../../types";
import { add, initAdd } from "./actions";
import Form from "./form";
import { IAddErrorStore } from "./reducers/error";
import { IAddIsSubmittedStore } from "./reducers/isSubmitted";

interface IActions {
    add(values: IItem): void;
    initAdd(): void;
}

interface IProps {
    actions: IActions;
    error: IAddErrorStore;
    history: any;
    isSubmitted: IAddIsSubmittedStore;
}

class ItemsAdd extends React.Component<IProps> {
    public componentDidMount(): void {
        this.props.actions.initAdd();
    }

    public componentDidUpdate(prevProps: IProps) {
        const { error, isSubmitted, history } = this.props;

        if (!error && isSubmitted) {
            history.push("/");
        }
    }

    public render() {
        const { actions, error } = this.props;

        return <Form onSubmit={actions.add} formError={error} />;
    }
}

const mapStateToProps = (store: IStore) => ({ ...store.items.add });

const mapDispatchToProps = (dispatch: Dispatch): Pick<IProps, "actions"> => ({
    actions: bindActionCreators({ add, initAdd }, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsAdd);
