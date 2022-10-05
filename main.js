let timedown = new Date("Dec 31, 2022 23:59:59").getTime()
let time = setInterval(() => {
    let now = new Date().getTime()
    let timeDiff = timedown - now
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) 
    let hours = Math.floor(timeDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let minutes = Math.floor(timeDiff % (1000 * 60 * 60) / (1000 * 60))
    let seconds = Math.floor(timeDiff % (1000 * 60) / (1000))
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds
    if (timeDiff === 0) {
        clearInterval(time)
    }
}, 1000)

// 2

let section = document.querySelector(".skills")
let color = document.querySelectorAll(".skills .color")
let sectionTow = document.querySelector(".stats")
let ps = document.querySelectorAll(".stats p")
let started = false
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 300) {
        color.forEach((s) => {
            s.style.width = s.dataset.width
        });

    }



    if (window.scrollY >= sectionTow.offsetTop) {
        if (!started) {
            ps.forEach((p) => countUntil(p))
        }
        started = true;
    }
}
function countUntil(el) {
    let goal = el.dataset.count
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}
