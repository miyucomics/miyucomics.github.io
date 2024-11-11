const parameters = new URLSearchParams(window.location.search)
var root = document.querySelector(":root")
if (parameters.get("background") != null) {
    root.style.setProperty("--background-color", parameters.get("background"))
}
if (parameters.get("inactive") != null) {
    root.style.setProperty("--inactive-color", parameters.get("inactive"))
}
if (parameters.get("active") != null) {
    root.style.setProperty("--active-color", parameters.get("active"))
}

const sun = document.getElementById("sun")
const heavenly_hours = Array.from(document.getElementsByClassName("heavenly-hours"))
const heavenly_minutes = Array.from(document.getElementsByClassName("heavenly-minutes"))
const earthly_hours = Array.from(document.getElementsByClassName("earthly-hours"))
const earthly_minutes = Array.from(document.getElementsByClassName("earthly-minutes"))

const animate = () => {
    const date = new Date()
    sun.classList.toggle("active", date.getSeconds() % 2 == 0)
    const heavenly_hour_count = Math.floor(date.getHours() / 5)
    for (let i = 0; i < heavenly_hours.length; i++) {
        heavenly_hours[i].classList.toggle("active", i < heavenly_hour_count)
    }
    const earthly_hour_count = Math.floor(date.getHours() % 5)
    for (let i = 0; i < earthly_hours.length; i++) {
        earthly_hours[i].classList.toggle("active", i < earthly_hour_count)
    }
    const heavenly_minutes_count = Math.floor(date.getMinutes() / 5)
    for (let i = 0; i < heavenly_minutes.length; i++) {
        heavenly_minutes[i].classList.toggle("active", i < heavenly_minutes_count)
    }
    const earthly_minutes_count = Math.floor(date.getMinutes() % 5)
    for (let i = 0; i < earthly_minutes.length; i++) {
        earthly_minutes[i].classList.toggle("active", i < earthly_minutes_count)
    }
    requestAnimationFrame(animate)
}

animate()
