const initState = {
    themeId: 1,
}

type InitStateType = typeof initState

type SetThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}

type ActionType = SetThemeIdActionType

export const themeReducer = (
    state: InitStateType = initState,
    action: ActionType
): InitStateType => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id }
        default:
            return state
    }
}

export const changeThemeId = (id: number): SetThemeIdActionType => ({
    type: 'SET_THEME_ID',
    id,
})
