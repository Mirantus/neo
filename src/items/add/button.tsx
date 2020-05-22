import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Store } from "../../store/reducers";

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

const mapStateToProps = ({ user }: Store) => ({ isAuthorized: user.auth.isAuthorized });

export default connect(mapStateToProps)(ItemsAddButton);
