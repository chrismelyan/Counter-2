import {AppStateType} from "./store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('set value');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: { counter: { start: number, max: number, value: number } | AppStateType }) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('set value', serializedState);
    } catch {
        // ignore write errors
    }
};