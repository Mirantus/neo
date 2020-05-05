import * as React from "react";
import { connect } from "react-redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import { IStore } from "../../store/reducers";
import { fetchItems } from "./actions";
import List from "./list";
import { IListStore } from "./reducers/";

type IProps = {
    data: IListStore["data"];
    error: IListStore["error"];
    isFetching: IListStore["isFetching"];
    fetchItems(): void;
};

export const ItemsList = (props: IProps) => {
    const { data, isFetching, error, fetchItems } = props;

    React.useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    if (isFetching) {
        return <Loader />;
    }

    if (error) {
        return <Error message={error} />;
    }

    return <List data={data} />;
};

const mapStateToProps = (store: IStore) => ({
    data: store.items.list.data,
    error: store.items.list.error,
    isFetching: store.items.list.isFetching,
});

export default connect(mapStateToProps, { fetchItems })(ItemsList);
