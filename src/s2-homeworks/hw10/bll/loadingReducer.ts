const initState = {
    isLoading: false,
}

type InitStateType = typeof initState

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

type ActionType = LoadingActionType

export const loadingReducer = (
    state: InitStateType = initState,
    action: ActionType
): InitStateType => {
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return { ...state, isLoading: action.isLoading }
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
