const initState = {
    isLoading: false
}
type initStateType = {
    isLoading: boolean
}
export const loadingReducer = (state:initStateType = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case "SET-LOADING": {
            return {...state,isLoading:action.isLoading}
        }
        default:
            return state
    }
}
type loadingACType=ReturnType<typeof loadingAC>
export const loadingAC = (isLoading:boolean) => {
    return{
        type:'SET-LOADING',
        isLoading
    }as const
}