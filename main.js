hiddenCard = "https://images.fineartamerica.com/images-medium-large-5/10-pixel-art-square-mike-taylor.jpg" 

let cardsChosen = [] 
let cardsChosenId = []
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

const grid = document.querySelector(".grid")

cardArray = organizedArray.sort(function(){
    return 0.5 - Math.random()
})

//create the grid
for (let i = 0; i <  cardArray.length; i++){
    let card = document.createElement("img")//creating an image of card so we are creating an image element
    card.setAttribute("src", hiddenCard)
    card.setAttribute("value", i)
    grid.appendChild(card)
    card.addEventListener("click", (flipcard))
}


function flipcard(){
    let cardId = this.getAttribute("value")//"this" is the card which is being event-listened //"value"=index position
    cardsChosen.push(cardArray[cardId].name)//necessary for comparing if they're a match
    cardsChosenId.push(cardId)//necessary for determining position on grid
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkIfMatch, 800)//if there is no interval, there is 0 seconds the amount of time the second image is displayed
    }
}

function checkIfMatch () {
    let cards = document.querySelectorAll("img")
    const choiceOneId = cardsChosenId[0]
    const choiceTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
        console.log("Hooray! It's a match")
        cardsWon.push(cardsChosen)
    }else{
        cards[choiceOneId].setAttribute("src", hiddenCard)
        cards[choiceTwoId].setAttribute("src", hiddenCard)
        console.log("try again")
    }
    cardsChosen = []
    cardsChosenId = []
    if (cardsWon.length === organizedArray.length/2){
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
