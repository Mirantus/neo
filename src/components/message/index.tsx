import * as React from "react";
import { connect } from "react-redux";

import { IStore } from "../../store/reducers";
import { messageHide } from "./actions";
import { IMessageStore } from "./reducers";

interface IProps {
    message: IMessageStore;
    messageHide(): void;
}

export const Message = (props: IProps) => {
    const { message, messageHide } = props;
    const className = `app-message notification is-${message.type}`;

    return message.text ? (
        <div className={className}>
            <button className="delete" onClick={messageHide} />
            {message.text}
        </div>
    ) : null;
};

const mapStateToProps = (store: IStore) => ({ message: store.message });

export default connect(mapStateToProps, { messageHide })(Message);
