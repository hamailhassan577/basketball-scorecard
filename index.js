let homeScore = document.querySelector("#home-score")
let guestScore = document.querySelector("#guest-score")

// console.log(homeScore, guestScore)

let homeScoreValue = 0
let guestScoreValue = 0


function incrementHome(num) {
    homeScoreValue +=num
    homeScore.innerHTML = homeScoreValue
}


function incrementGuest(num) {
    guestScoreValue +=num
    guestScore.innerHTML = guestScoreValue
}


function reset() {
    homeScoreValue = 0
    guestScoreValue = 0
    homeScore.innerHTML = 0
    guestScore.innerHTML = 0
}




