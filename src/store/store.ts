import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "./localStorage";

const rootReducers = combineReducers({
    counter: counterReducer
})
export const store = createStore(rootReducers, loadState())

store.subscribe(() => {
    saveState({
        counter: {
            start: store.getState().counter.start,
            max: store.getState().counter.max,
            value: store.getState().counter.value
        }
    })
})

export type AppStateType = ReturnType<typeof rootReducers>