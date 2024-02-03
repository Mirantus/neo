import { observer } from "mobx-react-lite";
import React, { MouseEvent } from "react";

import store from "../../store";
import { Item } from "../../types";

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
        <a className="is-link has-text-grey-light" title="Удалить" onClick={handleClick}>
            <span className="icon is-small">
                <i className="far fa-trash-alt" />
            </span>
        </a>
    );
};

export default observer(({ item }: { item: Item }) => (
    <ItemDeleteButton item={item} userId={store.user.profile.id} deleteItem={store.items.delete.submit.deleteItem} />
));
