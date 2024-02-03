import { observer } from "mobx-react-lite";
import React from "react";

import Loader from "../../components/loader";
import store from "../../store";

type Props = {
    loading: boolean;
};

export const Loading = (props: Props) => {
    return props.loading ? (
        <div className="app-message notification is-light">
            <Loader />
        </div>
    ) : null;
};

export default observer(() => <Loading loading={store.loading} />);
