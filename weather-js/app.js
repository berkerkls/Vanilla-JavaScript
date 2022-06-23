// Inıt weather
const weather = new Weather("Izmır", "Turkey")

// Inıt UI
const ui = new UI()
document.addEventListener("DOMContentLoaded", getWeather)

document.getElementById("w-change-btn").addEventListener("click", (e) => {
    const city = document.getElementById("city").value
    const country= document.getElementById("country").value

    weather.changeLocation(city, country)


    getWeather()

    // close
    $('#locModal').modal("hide")
    const modal = document.getElementById("locModal")
})

function getWeather() {
    weather.getWeather()
    .then(data => {
        ui.paint(data)
    })
    .catch(err => console.log(err))
}