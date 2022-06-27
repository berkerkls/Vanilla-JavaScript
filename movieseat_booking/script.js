const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat:not(.occupied)")
const total = document.getElementById("total")
const count = document.getElementById("count")

const movieSelect = document.getElementById("movie")

showUI()

let ticketPrice = +(movieSelect).value

// Change the count according to selected movie
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected")

    const holdSeatsLocal = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat)
    })

    localStorage.setItem("selectedSeats", JSON.stringify(holdSeatsLocal))

   const countNumber = selectedSeats.length
   count.innerText = countNumber
   total.innerText = countNumber * ticketPrice
    
}

// Seat click
container.addEventListener("click", (e) => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected")

        updateSelectedCount();
    } else if (e.target.classList.contains("seat") && e.target.classList.contains("selected")) {
        e.target.classList.remove("selected")
    }
})

//movie select
movieSelect.addEventListener("change", (e) => {
    ticketPrice = +e.target.value
    setMovieSeats(e.target.selectedIndex, e.target.value)
    updateSelectedCount()
})

// Local storage
function setMovieSeats (movieSeat, moviePrice) {
    localStorage.setItem("movieSeatIndex", movieSeat)
    localStorage.setItem("moviePrice", moviePrice) 
} 

// Show UI
function showUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"))

    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach(function (seat,index) {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        })
    }

    let selectedMovieIndex = localStorage.getItem("movieSeatIndex")
    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex
    }
}