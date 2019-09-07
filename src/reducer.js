
//* The state
const initialState = {
    counters: [{ value: 0, color: 'black' }]
}

const reducer = (state = { ...initialState }, action) => {

    let { type, newColor, newValue, index } = action;
    const { counters } = state
    switch (type) {
        case 'INCREMENT':
            return { ...state, ...state.counters[index].value += 1 }
            break;
        case 'DECREMENT':
            return { ...state, ...state.counters[index].value -= 1 }
            break;
        case 'INCREMENT_BY_FIVE':
            return { ...state, ...state.counters[index].value += 5 }
            break;
        case 'DECREMENT_BY_FIVE':
            return { ...state, ...state.counters[index].value -= 5 }
            break;
        case 'CHANGE_COLOR':
            return { ...state, ...state.counters[index.color = newColor] }
            break;
        case 'CHANGE_NUM':
            return { ...state, ...state.counters[index].value = newValue }
            break;
        case 'ADD_COUNTER':
            return { ...state, counters: [...state.counters.concat({ value: 0, color: 'black' })] }
            break;

    }
    return state
}