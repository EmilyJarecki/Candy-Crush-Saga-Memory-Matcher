hiddenCard = "https://images.fineartamerica.com/images-medium-large-5/10-pixel-art-square-mike-taylor.jpg" 
const grid = document.querySelector(".grid")
let wrongCards = document.getElementById("wrong_tries")
let correctCards = document.getElementById("cards_won")

let correct = Number(correctCards.textContent)
let wrong = Number(wrongCards.textContent)

function cardswrong(wrong) {
    wrongCards.textContent = wrong
}


let cardsChosen = [] 
let gridSpot = []
let cardsWon=[]
const organizedArray = [
    {name : "Pizza", img : "https://t4.ftcdn.net/jpg/02/11/55/17/360_F_211551718_Ol7eOQYNDK5S8pbEHMkagk9kbdYTJ2iX.jpg"
    },
    {name : "Pizza", img : "https://t4.ftcdn.net/jpg/02/11/55/17/360_F_211551718_Ol7eOQYNDK5S8pbEHMkagk9kbdYTJ2iX.jpg"
    },
    {name : "Hot Dog", img : "https://media.istockphoto.com/id/1146404440/vector/hot-dog-with-mustard-hand-drawing.jpg?s=612x612&w=0&k=20&c=b4tmD8q4AClUIQZF5zjto04VW9LTyqzgpt8HuFUGuVM="
    },
    {name : "Hot Dog", img : "https://media.istockphoto.com/id/1146404440/vector/hot-dog-with-mustard-hand-drawing.jpg?s=612x612&w=0&k=20&c=b4tmD8q4AClUIQZF5zjto04VW9LTyqzgpt8HuFUGuVM="
    },
    {name : "Ice Cream", img : "https://media.istockphoto.com/id/1244822316/vector/ice-cream-on-a-bowl.jpg?s=612x612&w=0&k=20&c=EJ-SzFyOvJPYN0bf9X1DNCtdZBJ0DTShsTnRn4xonO8="
    },
    {name : "Ice Cream", img : "https://media.istockphoto.com/id/1244822316/vector/ice-cream-on-a-bowl.jpg?s=612x612&w=0&k=20&c=EJ-SzFyOvJPYN0bf9X1DNCtdZBJ0DTShsTnRn4xonO8="
    },
    {name : "Pancakes", img : "https://media.istockphoto.com/id/1271917509/vector/illustration-of-pancake-illustration-like-hand-drawn-illustration-with-ink-and-brush.jpg?s=612x612&w=0&k=20&c=YmaCu5FSBMxuTzID0173PZ6AfsBy4oj-mOjOZHhms_Y="
    },
    {name : "Pancakes", img : "https://media.istockphoto.com/id/1271917509/vector/illustration-of-pancake-illustration-like-hand-drawn-illustration-with-ink-and-brush.jpg?s=612x612&w=0&k=20&c=YmaCu5FSBMxuTzID0173PZ6AfsBy4oj-mOjOZHhms_Y="
    }
]


cardArray = organizedArray.sort(function(){
    return 0.5 - Math.random()
})

//create the grid
for (let i = 0; i <  cardArray.length; i++){
    let card = document.createElement("img")//creating an image of card so we are creating an image element
    card.setAttribute("src", hiddenCard)
    card.setAttribute("value", i)
    grid.appendChild(card)
    card.addEventListener("click", (revealCard))
}

function revealCard(){
    
    let location = this.getAttribute("value")//"this" is the card which is being event-listened //"value"=index position

    cardsChosen.push(cardArray[location].name)//necessary for comparing if they're a match
    gridSpot.push(location)//necessary for determining position on grid

    this.setAttribute("src", cardArray[location].img)//changing the image
    if (cardsChosen.length === 2){
        setTimeout(checkIfMatch, 500)//if there is no interval, there is 0 seconds the amount of time the second image is displayed
    }
}

function checkIfMatch () {
    let cards = document.querySelectorAll("img")
    const choice1spot = gridSpot[0]
    const choice2spot = gridSpot[1]
    if (cardsChosen[0] === cardsChosen[1]){
        console.log("Hooray! It's a match")
        cardsWon.push(cardsChosen)
        correct++
    }else{
        cards[choice1spot].setAttribute("src", hiddenCard)
        cards[choice2spot].setAttribute("src", hiddenCard)
        wrong++
        cardswrong(wrong)
        console.log("try again")
    }
    cardsChosen = []
    gridSpot = []
    if (cardsWon.length === cardArray.length/2){
        alert("Congratulations! You've found all of them!")
    }
}














//TIMER
// const startTimer = document.querySelector("#startTimer")
// const tick = document.querySelector("#timerCount")

// function updateTicks(num) {
//     tick.textContent = num
//   }

// let count = Number(tick.textContent)

// startTimer.addEventListener("click", function(){
//     interval = setInterval(() => {
//       count--
//       updateTicks(count)
//     }, 1000)
//     startTimer.disabled = true
//   })
