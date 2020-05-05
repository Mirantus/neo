import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { IStore } from "../../store/reducers";

type IProps = {
    isAuthorized: boolean;
};

const ItemsAddButton = (props: IProps) => {
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

const mapStateToProps = ({ user }: IStore) => ({ isAuthorized: user.auth.isAuthorized });

export default connect(mapStateToProps)(ItemsAddButton);
