const days = document.getElementById("days")
const lapses = document.getElementById("lapses")
const addLapse = document.getElementById("add-lapse")
const sentence = document.getElementById("sentence")

let numberOfLapses = 0

if (localStorage.getItem("lapses") != undefined) {
    numberOfLapses = Number(localStorage.getItem("lapses"))
}

let count = 0
days.innerHTML = count
let time = 24 * 3600000

const timer = setInterval(() => {
    count += 1
    days.innerHTML = count
}, time)

lapses.innerHTML = numberOfLapses
hearMe = "It is okay if you failed once, twice, or even 100 times. Future Youssef, don't quit no matter what! YOU HAVE TO FIGHT IT BACK"

addLapse.addEventListener("click", () => {
    numberOfLapses += 1
    lapses.innerHTML = numberOfLapses
    localStorage.setItem("lapses", numberOfLapses)
    sentence.innerHTML = hearMe
})

