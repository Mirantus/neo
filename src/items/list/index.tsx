import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import { IStore } from "../../store/reducers";
import { fetchItems } from "./actions";
import List from "./list";
import { IListStore } from "./reducers/";

interface IPropsActions {
    fetchItems(): void;
}

interface IProps {
    actions: IPropsActions;
    data: IListStore["data"];
    error: IListStore["error"];
    isFetching: IListStore["isFetching"];
}

class ItemsList extends React.Component<IProps> {
    public componentDidMount(): void {
        const { actions } = this.props;

        actions.fetchItems();
    }

    public render() {
        const { data, isFetching, error } = this.props;

        if (isFetching) {
            return <Loader />;
        }

        if (error) {
            return <Error message={error.message} />;
        }

        return (
            <List data={data}/>
        );
    }
}

const mapStateToProps = (store: IStore) => ({
    data: store.items.list.data,
    error: store.items.list.error,
    isFetching: store.items.list.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<IProps, "actions"> => ({
    actions: bindActionCreators({ fetchItems }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
