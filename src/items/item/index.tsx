import React, { useEffect } from "react";
import { connect } from "react-redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import { Store } from "../../store/index";

import Content from "./content";
import { fetchItem, ItemStore } from "./slice";

type Props = {
    data: ItemStore["data"];
    error: ItemStore["error"];
    id: string;
    isFetching: ItemStore["isFetching"];
    fetchItem(id: string): void;
};

export const Item = (props: Props) => {
    const { data, id, isFetching, error, fetchItem } = props;

    useEffect(() => {
        fetchItem(id);
    }, [fetchItem, id]);

    if (isFetching) {
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
    data: store.items.item.data,
    error: store.items.item.error,
    isFetching: store.items.item.isFetching,
});

export default connect(mapStateToProps, { fetchItem })(Item);
