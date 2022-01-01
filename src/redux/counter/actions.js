import { DECREMENT_NUMBER, INCREMENT_NUMBER } from "./types"

export const addIncrment = (number) => ({
    type: INCREMENT_NUMBER,
    payload: number
})

export const addDecrement = (number) => ({
    type: DECREMENT_NUMBER,
    payload: number
})