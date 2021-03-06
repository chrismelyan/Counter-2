export type IncrementValueType = ReturnType<typeof incrementValue>
export const incrementValue = () => {
    return {
        type: 'INCREMENT-VALUE'
    } as const
}

export type ResetValueType = ReturnType<typeof resetValue>
export const resetValue = () => {
    return {
        type: 'RESET-VALUE'
    } as const
}

export type SetStartValueType = ReturnType<typeof setStartValue>
export const setStartValue = (start: number, editMode: boolean) => {
    return {
        type: 'SET-START-VALUE',
        payload: {start, editMode}
    } as const
}

export type SetMaxValueType = ReturnType<typeof setMaxValue>
export const setMaxValue = (max: number, editMode: boolean) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {max, editMode}
    } as const
}

export type ChangeEditModeType = ReturnType<typeof changeEditMode>
export const changeEditMode = (editMode: boolean) => {
    return {
        type: 'CHANGE-EDIT-MODE',
        payload: {editMode}
    } as const
}

export type ChangeErrorType = ReturnType<typeof changeError>
export const changeError = (error: boolean) => {
    return {
        type: 'CHANGE-ERROR',
        payload: {error}
    } as const
}
