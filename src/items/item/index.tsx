import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";

import Error from "../../components/error";
import Loader from "../../components/loader";
import store from "../../store";
import type { ItemInitStore } from "../../store/items/item/init";

import Content from "./content";

type Props = {
    data: ItemInitStore["data"];
    error: ItemInitStore["error"];
    id: string;
    pending: ItemInitStore["pending"];
    fetchItem: ItemInitStore["fetchItem"];
};

export const Item = (props: Props) => {
    const { data, id, pending, error, fetchItem } = props;

    useEffect(() => {
        fetchItem(id);
    }, [fetchItem, id]);

    if (pending) {
        return <Loader />;
    }

    if (error) {
        return <Error message={error} />;
    }

    if (data) {
        return <Content data={data} />;
    }

    return null;
};

export default observer(({ id }: { id: string }) => (
    <Item
        data={store.items.item.init.data}
        error={store.items.item.init.error}
        id={id}
        pending={store.items.item.init.pending}
        fetchItem={store.items.item.init.fetchItem}
    />
));
