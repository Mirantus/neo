import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";

import store from "../../store";

type Props = {
    isAuthorized: boolean;
};

const ItemsAddButton = (props: Props) => {
    if (!props.isAuthorized) {
        return null;
    }

    return (
        <div className="content">
            <Link to="/add" className="button is-link">
                <span className="icon is-small">
                    <i className="fas fa-plus" />
                </span>
                <span>Добавить</span>
            </Link>
        </div>
    );
};

export default observer(() => <ItemsAddButton isAuthorized={store.user.auth.isAuthorized} />);
