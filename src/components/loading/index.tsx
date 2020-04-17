import * as React from "react";
import { connect } from "react-redux";

import Loader from "../../components/loader";
import { IStore } from "../../store/reducers";
import { ILoadingStore } from "./reducers";

interface IProps {
    loading: ILoadingStore;
}

export const Loading = (props: IProps) => {
    return props.loading ? (
        <div className="app-message notification is-light">
            <Loader />
        </div>
    ) : null;
};

const mapStateToProps = (store: IStore) => ({ loading: store.loading });

export default connect(mapStateToProps)(Loading);
