import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import { IStore } from "../../store/reducers";
import { fetchItem } from "./actions";
import Content from "./content";
import { IItemStore as IStoreItem } from "./reducers/";

interface IActions {
    fetchItem(id: string): void;
}

interface IProps {
    actions: IActions;
    data: IStoreItem["data"];
    error: IStoreItem["error"];
    id: string;
    isFetching: IStoreItem["isFetching"];
}

const Item = (props: IProps) => {
    const { actions, data, id, isFetching, error } = props;

    React.useEffect(() => {
        actions.fetchItem(id);
    }, []);

    if (isFetching) {
        return <Loader />;
    }

    if (error) {
        return <Error message={error.message} />;
    }

    if (data) {
        return <Content data={data} />;
    }

    return null;
};

const mapStateToProps = (store: IStore) => ({
    data: store.items.item.data,
    error: store.items.item.error,
    isFetching: store.items.item.isFetching,
});

const mapDispatchToProps = (dispatch: Dispatch): Pick<IProps, "actions"> => ({
    actions: bindActionCreators({ fetchItem }, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Item);
