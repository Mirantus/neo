import * as React from "react";
import { connect } from "react-redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import { Store } from "../../store/reducers";
import { fetchItems } from "./actions";
import List from "./list";
import { ListStore } from "./reducers/";

type Props = {
    data: ListStore["data"];
    error: ListStore["error"];
    isFetching: ListStore["isFetching"];
    fetchItems(): void;
};

export const ItemsList = (props: Props) => {
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

const mapStateToProps = (store: Store) => ({
    data: store.items.list.data,
    error: store.items.list.error,
    isFetching: store.items.list.isFetching,
});

export default connect(mapStateToProps, { fetchItems })(ItemsList);
