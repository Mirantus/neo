import React, { useEffect } from "react";
import { connect } from "react-redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import { Store } from "../../store/index";

import Content from "./content";
import { fetchItem, ItemInitStore } from "./slices/init";

type Props = {
    data: ItemInitStore["data"];
    error: ItemInitStore["error"];
    id: string;
    pending: ItemInitStore["pending"];
    fetchItem(id: string): void;
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

const mapStateToProps = (store: Store) => ({
    data: store.items.item.init.data,
    error: store.items.item.init.error,
    pending: store.items.item.init.pending,
});

export default connect(mapStateToProps, { fetchItem })(Item);
