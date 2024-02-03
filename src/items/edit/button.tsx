import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";

import store from "../../store";
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

export default observer(({ item }: { item: Item }) => <ItemEditButton item={item} userId={store.user.profile.id} />);
