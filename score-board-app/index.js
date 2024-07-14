// set variables for home and guest
let homeScore = 0
let guestScore = 0

// get the home and guest elements from the dom
let homeElement = document.getElementById("home-score")
homeElement.textContent = homeScore

let guestElement = document.getElementById("guest-score")
guestElement.textContent = guestScore

// home functions for +1, +2, and +3
function plusOnePoint() {
    homeScore += 1
    homeElement.textContent = homeScore
}

function plusTwoPoint() {
    homeScore += 2
    homeElement.textContent = homeScore
}

function plusThreePoint() {
    homeScore += 3
    homeElement.textContent = homeScore
}

// away functions for +1, +2, and +3
function plusOnePointGuest() {
    guestScore += 1
    guestElement.textContent = guestScore
}

function plusTwoPointGuest() {
    guestScore += 2
    guestElement.textContent = guestScore
}

function plusThreePointGuest() {
    guestScore += 3
    guestElement.textContent = guestScore
}

// clear score function
function clearScore() {
    homeScore = 0
    guestScore = 0
    homeElement.textContent = homeScore
    guestElement.textContent = guestScore
}