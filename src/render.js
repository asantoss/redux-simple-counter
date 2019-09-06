const render = (state) => {
    const { counters } = state

    const app = document.getElementById('container')
    app.innerHTML = counters.map((counter, i) => {
        return counterHTML(counter, i)
    }).join('')

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.onsubmit = (e) => {
            e.preventDefault()
            const index = form.getAttribute('data-counterid')
            changeNumber(index, form.elements.number.value)
        }
    })

    const selects = document.querySelectorAll('select')
    selects.forEach(select => {
        select.onchange = (e) => {
            const index = select.getAttribute('data-counterid')
            colorSelect(index, select.value);
        }
    })
}

function counterHTML(counter, i) {
    const { value, color } = counter
    return `<div>
    <h1 style="color: ${color}">${value}</h1>
    <button id="decrement" onclick="decrement(${i})">-</button>
    <button id="increment" onclick="increment(${i})" >+</button>
    <button id="incrementByFive" onclick="incrementByFive(${i})">+5</button>
    <button id="decrementByFive" onclick="decrementByFive(${i})">-5</button>
    <select name="color" id="changeColor" data-counterid=${i} onchange="colorSelect(${i})">
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">yellow</option>
        <option value="black">Black</option>
        <option value="grey">Grey</option>
    </select>
    <form action="" id="changeNumber" data-counterid=${i} onsubmit="changeNumber(${i}); return false;">
        <input type="number" name="number" id="">
        <button type="submit">Change</button>
    </form>
</div>`
}