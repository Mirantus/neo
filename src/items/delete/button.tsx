import React, { MouseEvent } from "react";
import { connect } from "react-redux";

import { Store } from "../../store/reducers";
import { Item } from "../../types";
import { deleteItem } from "./actions";

type Props = {
    item: Item;
    userId?: string;
    deleteItem(id: string): void;
};

export const ItemDeleteButton = (props: Props) => {
    const { item, userId, deleteItem } = props;

    if (userId !== item.user_id) {
        return null;
    }

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        if (confirm("Вы действительно хотите удалить запись?")) {
            deleteItem(item.id);
        }
    };

    return (
        <a className="is-link has-text-grey-light" onClick={handleClick}>
            <span className="icon is-small">
                <i className="far fa-trash-alt" />
            </span>
        </a>
    );
};

const mapStateToProps = (store: Store) => ({
    userId: store.user.profile.id,
});

export default connect(mapStateToProps, { deleteItem })(ItemDeleteButton);
