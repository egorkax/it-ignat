import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const allBtnClasses = s.button +' ' + (props.filter === 'all' ? s.active : '')
    const highBtnClasses =s.button +' ' + ( props.filter === 'high' ? s.active : '')
    const middleBtnClasses = s.button +' ' + (props.filter === 'middle' ? s.active : '')
    const lowBtnClasses =s.button +' ' + ( props.filter === 'low' ? s.active : '')


    const setClass=(filterValue:FilterType)=>{
        return s.button + ' ' + (props.filter===filterValue?s.active:' ')
    }


    return (
        <div className={s.block}>

            {mappedAffairs}

            <button className={allBtnClasses} onClick={setAll}>All</button>
            <button className={highBtnClasses} onClick={setHigh}>High</button>
            <button className={middleBtnClasses} onClick={setMiddle}>Middle</button>
            <button className={lowBtnClasses} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs

