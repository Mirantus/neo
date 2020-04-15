import React, { MouseEvent } from "react";
import { connect } from "react-redux";

import { IStore } from "../../store/reducers";
import { IItem } from "../../types";
import { deleteItem } from "./actions";

interface IProps {
    item: IItem;
    userId?: string;
    deleteItem(id: string): void;
}

export const ItemDeleteButton = (props: IProps) => {
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

const mapStateToProps = (store: IStore) => ({
    userId: store.user.profile.id,
});

export default connect(mapStateToProps, { deleteItem })(ItemDeleteButton);
