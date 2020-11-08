import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Store } from "../../store/reducers";
import { Item } from "../../types";

type Props = {
    item: Item;
    userId?: string;
};

export const ItemEditButton = (props: Props) => {
    const { item, userId } = props;

    if (userId !== item.user_id) {
        return null;
    }

    return (
        <Link to={`/edit/${item.id}`} className="is-link has-text-grey-light" title="Редактировать">
            <span className="icon is-small">
                <i className="fas fa-edit" />
            </span>
        </Link>
    );
};

const mapStateToProps = (store: Store) => ({
    userId: store.user.profile.id,
});

export default connect(mapStateToProps)(ItemEditButton);
