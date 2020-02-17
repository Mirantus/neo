import * as React from "react";
import { connect } from "react-redux";

import Error from "../../components/error";
import Loader from "../../components/loader";
import { IStore } from "../../store/reducers";
import { fetchItem } from "./actions";
import Content from "./content";
import { IItemStore as IStoreItem } from "./reducers/";

interface IProps {
    data: IStoreItem["data"];
    error: IStoreItem["error"];
    id: string;
    isFetching: IStoreItem["isFetching"];
    fetchItem(id: string): void;
}

export const Item = (props: IProps) => {
    const { data, id, isFetching, error, fetchItem } = props;

    React.useEffect(() => {
        fetchItem(id);
    }, []);

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

const mapStateToProps = (store: IStore) => ({
    data: store.items.item.data,
    error: store.items.item.error,
    isFetching: store.items.item.isFetching,
});

export default connect(
    mapStateToProps,
    { fetchItem }
)(Item);
