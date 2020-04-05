import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { IStore } from "../../../store/reducers";
import { IItem } from "../../../types";

interface IProps {
    item: IItem;
    userId?: string;
}

export const ItemEditButton = (props: IProps) => {
    const { item, userId } = props;

    if (userId !== item.user_id) {
        return null;
    }

    return (
        <Link to={`/edit/${item.id}`} className="is-link has-text-grey-light">
            <span className="icon is-small">
                <i className="fas fa-edit" />
            </span>
        </Link>
    );
};

const mapStateToProps = (store: IStore) => ({
    userId: store.user.profile.id,
});

export default connect(mapStateToProps)(ItemEditButton);
