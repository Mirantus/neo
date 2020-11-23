import React from "react";
import { connect } from "react-redux";

import { Store } from "../../store/index";

import { messageHide, MessageStore } from "./slice";

type Props = {
    message: MessageStore;
    messageHide(): void;
};

export const Message = (props: Props) => {
    const { message, messageHide } = props;
    const className = `app-message notification is-${message.type}`;

    return message.text ? (
        <div className={className}>
            <button className="delete" onClick={messageHide} />
            {message.text}
        </div>
    ) : null;
};

const mapStateToProps = (store: Store) => ({ message: store.message });

export default connect(mapStateToProps, { messageHide })(Message);
