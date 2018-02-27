export const counters = (state= {tab:[1]}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                tab: [
                    ...state.tab.slice(0, action.payload.index),
                    state.tab[action.payload.index] = state.tab[action.payload.index] + action.payload.value,
                    ...state.tab.slice(action.payload.index + 1)
                ]
            }
        case 'DECREMENT':
            return {
                ...state,
                tab: [
                    ...state.tab.slice(0, action.payload.index),
                    state.tab[action.payload.index] = state.tab[action.payload.index] - action.payload.value,
                    ...state.tab.slice(action.payload.index + 1)
                ]
            }
        case 'ADDCOUNTER':
            return {
                ...state,
                tab: [
                    ...state.tab,
                    0
                ]
            }
        case 'REMOVECOUNTER':
            return {
                ...state,
                tab: [
                    ...state.tab.slice(0, action.payload.index),
                    ...state.tab.slice(action.payload.index + 1)
                ]
            }
        default:
            return state
    }
}