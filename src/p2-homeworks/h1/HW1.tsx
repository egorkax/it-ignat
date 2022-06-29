import React from 'react'
import Message from "./Message";


export type MessageDataType={
    avatar:string
    name:string
    message:string
    time:string
}

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Anton',
    message: 'Hey bro!!!',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            <span style={{color:"orange",fontSize:"22px",fontWeight:"initial"}} > homeworks 1 </span>


            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
