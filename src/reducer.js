const initialState = {
    counters: [{ value: 0, color: 'black' }]
}

const reducer = (state = Object.assign({}, initialState), action) => {

    let { type, color, value, index } = action;
    switch (type) {
        case 'INCREMENT':
            state.counters[index].value += 1
            return state
            break;
        case 'DECREMENT':
            state.counters[index].value -= 1
            return state
            break;
        case 'INCREMENT_BY_FIVE':
            state.counters[index].value += 5
            return state
            break;
        case 'DECREMENT_BY_FIVE':
            state.counters[index].value -= 5
            return state
            break;
        case 'CHANGE_COLOR':
            state.counters[index].color = color
            return state
            break;
        case 'CHANGE_NUM':
            state.counters[index].value = value
            return state
            break;
        case 'ADD_COUNTER':
            console.log(state)
            state.counters.push({
                value: 0,
                color: 'black'
            })
            return state
            break;

    }
    return state
}