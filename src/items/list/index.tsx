import React, { useEffect } from "react";
import { connect } from "react-redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import { Store } from "../../store/index";

import List from "./list";
import { fetchItems, ListInitStore } from "./slices/init";

type Props = {
    data: ListInitStore["data"];
    error: ListInitStore["error"];
    pending: ListInitStore["pending"];
    fetchItems(): void;
};

export const ItemsList = (props: Props) => {
    const { data, pending, error, fetchItems } = props;

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    if (pending) {
        return <Loader />;
    }

    if (error) {
        return <Error message={error} />;
    }

    return <List data={data} />;
};

const mapStateToProps = (store: Store) => ({
    data: store.items.list.init.data,
    error: store.items.list.init.error,
    pending: store.items.list.init.pending,
});

export default connect(mapStateToProps, { fetchItems })(ItemsList);
