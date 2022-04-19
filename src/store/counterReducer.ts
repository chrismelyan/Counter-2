import {
    ChangeEditModeType, ChangeErrorType,
    ChangeSettingsType,
    IncrementValueType,
    ResetValueType,
    SetMaxValueType,
    SetStartValueType
} from "./actions";
import {AppStateType} from "./store";

export type InitStateType = {
    value: number
    max: number
    start: number
    editMode: boolean
    error: boolean
}

type ActionType = ChangeSettingsType
    | IncrementValueType
    | ResetValueType
    | SetMaxValueType
    | SetStartValueType
    | ChangeEditModeType
    | ChangeErrorType

const initialState: InitStateType = {
    value: 0,
    max: 0,
    start: 0,
    editMode: false,
    error: false
}

export const counterReducer = (state = initialState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'CHANGE-EDIT-MODE':
        case 'SET-MAX-VALUE':
        case 'CHANGE-ERROR':
        case 'SET-START-VALUE':
            return {
                ...state,
                ...action.payload
            }
        case "CHANGE-SETTINGS":
            return {
                ...state,
                ...action.payload,
                value: action.payload.start
            }
        case 'INCREMENT-VALUE':
            return {
                ...state,
                value: state.value + 1
            }
        case 'RESET-VALUE':
            return {...state, value: state.start}
        default:
            return state
    }
}

export const selectAllCounter = (state: AppStateType) => state.counter
