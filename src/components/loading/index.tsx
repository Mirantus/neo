import * as React from "react";
import { connect } from "react-redux";

import Loader from "../../components/loader";
import { IStore } from "../../store/reducers";
import { ILoadingStore } from "./reducers";
import "./styles.less";

interface IProps {
    loading: ILoadingStore;
}

export const ApplicationLoader = (props: IProps) => {
    return props.loading ? (
        <div className="loading notification is-light">
            <Loader />
        </div>
    ) : null;
};

const mapStateToProps = (store: IStore) => ({ loading: store.loading });

export default connect(mapStateToProps)(ApplicationLoader);
