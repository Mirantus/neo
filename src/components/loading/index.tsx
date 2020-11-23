import React from "react";
import { connect } from "react-redux";

import Loader from "../../components/loader";
import { Store } from "../../store/index";

import { LoadingStore } from "./slice";

type Props = {
    loading: LoadingStore;
};

export const Loading = (props: Props) => {
    return props.loading ? (
        <div className="app-message notification is-light">
            <Loader />
        </div>
    ) : null;
};

const mapStateToProps = (store: Store) => ({ loading: store.loading });

export default connect(mapStateToProps)(Loading);
