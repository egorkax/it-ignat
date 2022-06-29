import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)

    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)

    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString() || <br/>
    const stringDate = date?.toLocaleDateString() || <br/>

    return (
        <div>
            <div style={{width: "100px"}}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
               <span style={{color: "white", fontSize: "22px", fontWeight: "initial"}}>
                   {stringTime}
               </span>
            </div>

            <div style={{color: "white", fontSize: "22px", fontWeight: "initial",height:"22px"}}>
                {show ? stringDate : ''}
            </div>

            <SuperButton onClick={start}>showTime</SuperButton>
            <SuperButton onClick={stop}>stopTime</SuperButton>

        </div>
    )
}

export default Clock
