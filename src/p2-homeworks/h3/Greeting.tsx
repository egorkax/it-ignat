import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void
    addUser: ()=>void
    error: string
    totalUsers: number
    addUserOnEnter:(e:KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,addUserOnEnter} // деструктуризация пропсов
) => {
    const inputClass = error?s.errorInput : s.input
    const butClass=name?s.button:s.buttonDis

    return (
        <div className={s.block}>
            <div >
            <input value={name} onChange={setNameCallback} className={inputClass} placeholder={'Enter name!!!'} onKeyDown={addUserOnEnter} onBlur={setNameCallback}/>
            <div className={s.textError}>{error}</div>
            </div>
            <button className={butClass} onClick={addUser} disabled={!name}>add</button>
            <div className={s.users}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
