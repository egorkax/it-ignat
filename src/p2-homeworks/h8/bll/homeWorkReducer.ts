import {UserType} from "../HW8";


type actionType = { type: 'sort', payload: 'up' | 'down' } | { type: 'CHECK-AGE', payload: number }
export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => { // need to fix any
    switch (action.type) {
        case "sort": {
            const newState = [...state].sort((a, b) => {
                if (a.age > b.age) return 1
                else if (a.age < b.age) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }

        // case 'SORT-UP': {
        //     return [
        //         ...state.sort((a,b)=>a.age-b.age)
        //     ]
        // }
        // case 'SORT-DOWN': {
        //     return [
        //         ...state.sort((a,b)=>b.age-a.age)
        //     ]
        // }
        case "CHECK-AGE": {
            return state.filter(e => e.age > action.payload)

        }

        default:
            return state
    }
}


//
// type actionType = sortUpACType | sortDownACType | checkAgeACType
// type sortUpACType = ReturnType<typeof sortUpAC>
// export const sortUpAC = () => {
//     return {
//         type: 'SORT-UP',
//     } as const
// }
// type sortDownACType = ReturnType<typeof sortDownAC>
// export const sortDownAC = () => {
//     return {
//         type: 'SORT-DOWN',
//     } as const
// }
// type checkAgeACType = ReturnType<typeof checkAgeAC>
// export const checkAgeAC = (age: number) => {
//     return {
//         type: 'CHECK-AGE',
//         payload:age
//     } as const
// }
