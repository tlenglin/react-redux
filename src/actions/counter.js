export const increment = (index, value) => {
    return {
        type: 'INCREMENT',
        payload: { index, value }
    }
}

export const decrement = (index, value) => {
    return {
        type: 'DECREMENT',
        payload: { index, value }
    }
}

export const addCounter = () => {
    return {
        type: 'ADDCOUNTER'
    }
}

export const removeCounter = (index) => {
    return {
        type: 'REMOVECOUNTER',
        payload: { index }
    }
}