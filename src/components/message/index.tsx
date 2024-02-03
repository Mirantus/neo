import { observer } from "mobx-react-lite";
import React from "react";

import store from "../../store";

type Props = {
    messageText: string;
    messageType: string;
    messageHide(): void;
};

export const Message = (props: Props) => {
    const { messageText, messageType, messageHide } = props;
    const className = `app-message notification is-${messageType}`;

    return messageText ? (
        <div className={className}>
            <button className="delete" onClick={messageHide} />
            {messageText}
        </div>
    ) : null;
};

export default observer(() => (
    <Message
        messageText={store.message.text}
        messageType={store.message.type}
        messageHide={store.message.messageHide}
    />
));
