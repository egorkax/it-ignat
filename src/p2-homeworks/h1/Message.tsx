import React from 'react'
import {MessageDataType} from "./HW1";
import s from './Message.module.css';

function Message(props: MessageDataType) {
    return (
        <div className={s.blockWindow}>
            <img className={s.avatar} src={props.avatar}/>
            <div className={s.blockMessage}>
            <div className={s.name}>{props.name}</div>
            <div className={s.message}>{props.message}</div>
            <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
