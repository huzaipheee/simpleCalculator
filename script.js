var allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '=', '+', '-', '*', 'x', '^', '/', 'Delete', 'Backspace']

document.getElementById("title").addEventListener("click", function () {
    window.location.href = "index.html";
})
document.getElementById("mainBox").addEventListener("keydown", function (event) {
    if (event.key == "Enter" || !allowedKeys.includes(event.key)) {
        event.preventDefault()
    }
})

function concatNumber(num, displayID) {
    display = document.getElementById(displayID)
    if (num === 'DEL') {
        display.value = document.getElementById(displayID).value.slice(0, -1)
    } else if (num === "AC") {
        display.value = ""
    } else if (num === "=") {
        display.value = eval(((display.value).replaceAll('^', '**')).replaceAll('x', '*'))
    } else {
        display.value += num
    }
}

var buttonElements = Array.from(document.getElementsByClassName("numberButton"))
buttonElements.push(...Array.from(document.getElementsByClassName("operatorButton")))
for (const element of buttonElements) {
    element.addEventListener("mouseover", function () {
        element.style.width = "11%"
    })
    element.addEventListener("mouseout", function () {
        element.style.width = "10%"
    })
}


var specialButtonElements = Array.from(document.getElementsByClassName("specialButton"))
for (const element of specialButtonElements) {
    element.addEventListener("mouseover", function () {
        element.style.width = "31%"
    })
    element.addEventListener("mouseout", function () {
        element.style.width = "30%"
    })
}
