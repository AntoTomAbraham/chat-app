import React, { forwardRef } from 'react';

import "./Message.css";
function Message({message,username}) {
    const isUser = username === message.username;

    return (
        <div className={"message ${isUser && 'message_user'}"}>
            <p className={isUser ? "message_usercard":"message_questcard"}>
                {message.username}:{message.message}
                </p>
        </div>
    )
}

export default Message
