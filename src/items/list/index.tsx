import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

import Error from "../../components/error";
import Loader from "../../components/loader";
import store from "../../store";
import { Items } from "../../store/items/list/init";

import List from "./list";

type Props = {
    data: Items["data"];
    error: Items["error"];
    pending: Items["pending"];
    fetchItems: Items["fetchItems"];
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

export default observer(() => (
    <ItemsList
        data={store.items.list.init.data}
        error={store.items.list.init.error}
        pending={store.items.list.init.pending}
        fetchItems={store.items.list.init.fetchItems}
    />
));
