import { DECREMENT_NUMBER, INCREMENT_NUMBER } from "./types";

const INITIAL_STATE = {
    count: 0,
    name: 'bilal',
    tesT:'sdklflskdjfl'
}

export default (state = INITIAL_STATE, action ) => {
    const { type, payload } = action
    console.log('yoyoy', action);
    switch (type) {
        case INCREMENT_NUMBER:

            var add = payload
            add = state.count + 1
            return {...state, count: add}
        case DECREMENT_NUMBER:
            var subtack = payload
            subtack = state.count - 1
            return {...state, count: subtack}
        default:
            return state
    }
}