
let hourSpan = document.getElementById('hour')
let minuteSpan = document.getElementById('minute')
let secondSpan = document.getElementById('second')
let amorpmSpan = document.getElementById('amorpm')

let colors = [
    'red',
    'blue',
    'green',
    'orange',
    'purple',
    'pink',
    'yellow',
    'cyan',
    'lime',
    'brown'
]

function ChangeTime() {

    let date = new Date()

    let hour = date.getHours()
    hourSpan.innerHTML = hour

    let minute = date.getMinutes()
    minuteSpan.innerHTML = minute

    let second = date.getSeconds()
    secondSpan.innerHTML = second

    if (hour >= 0 && hour <= 11) {
        amorpmSpan.innerHTML = 'AM'
    }
    else {
        amorpmSpan.innerHTML = 'PM'
    }

    // Change color for every minute
    let colorIndex = second % colors.length

    document.body.style.backgroundColor = colors[colorIndex]
}

setInterval(ChangeTime, 1000)