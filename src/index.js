const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()));

window.onload = () => {
    render(getState())
}


/* All event listeners are declared as functions.
    This is due to the fact that the HTML wont be available until
    the html is rendered. We add the event listeners inside of our markup.
*/
function increment(i) {
    dispatch({ type: "INCREMENT", index: i })
}
function decrement(i) {
    dispatch({ type: "DECREMENT", index: i })
}
function incrementByFive(i) {
    dispatch({ type: "INCREMENT_BY_FIVE", index: i })
}
function decrementByFive(i) {
    dispatch({ type: "DECREMENT_BY_FIVE", index: i })
}

function colorSelect(i, value) {
    dispatch({ type: "CHANGE_COLOR", newColor: value, index: i })
}

function changeNumber(i, value) {
    dispatch({ type: "CHANGE_NUM", newValue: Number(value), index: i })
}
function addCounter() {
    dispatch({ type: "ADD_COUNTER" })
}
