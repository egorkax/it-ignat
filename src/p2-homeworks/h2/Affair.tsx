import React from 'react'
import {AffairType} from "./HW2";
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    const colorPriority=s.name +' '+ s[props.affair.priority]

    return (
        <div className={s.blockAffair}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={colorPriority}>{props.affair.priority}</div>
            <button className={s.name +' ' + s.remBut} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
