hiddenCard = "https://images.fineartamerica.com/images-medium-large-5/10-pixel-art-square-mike-taylor.jpg" 


cardArray = [
    {
        name : "Pizza", 
        img : "https://t4.ftcdn.net/jpg/02/11/55/17/360_F_211551718_Ol7eOQYNDK5S8pbEHMkagk9kbdYTJ2iX.jpg"
    },
    {
        name : "Pizza", 
        img : "https://t4.ftcdn.net/jpg/02/11/55/17/360_F_211551718_Ol7eOQYNDK5S8pbEHMkagk9kbdYTJ2iX.jpg"
    },
    {
        name : "Hot Dog", 
        img : "https://media.istockphoto.com/id/1146404440/vector/hot-dog-with-mustard-hand-drawing.jpg?s=612x612&w=0&k=20&c=b4tmD8q4AClUIQZF5zjto04VW9LTyqzgpt8HuFUGuVM="
    },
    {
        name : "Hot Dog", 
        img : "https://media.istockphoto.com/id/1146404440/vector/hot-dog-with-mustard-hand-drawing.jpg?s=612x612&w=0&k=20&c=b4tmD8q4AClUIQZF5zjto04VW9LTyqzgpt8HuFUGuVM="
    },
    {
        name : "Ice Cream",
        img : "https://media.istockphoto.com/id/1244822316/vector/ice-cream-on-a-bowl.jpg?s=612x612&w=0&k=20&c=EJ-SzFyOvJPYN0bf9X1DNCtdZBJ0DTShsTnRn4xonO8="
    },
    {
        name : "Ice Cream",
        img : "https://media.istockphoto.com/id/1244822316/vector/ice-cream-on-a-bowl.jpg?s=612x612&w=0&k=20&c=EJ-SzFyOvJPYN0bf9X1DNCtdZBJ0DTShsTnRn4xonO8="
    },
    {
        name : "Pancakes",
        img : "https://media.istockphoto.com/id/1271917509/vector/illustration-of-pancake-illustration-like-hand-drawn-illustration-with-ink-and-brush.jpg?s=612x612&w=0&k=20&c=YmaCu5FSBMxuTzID0173PZ6AfsBy4oj-mOjOZHhms_Y="
    },
    {
        name : "Pancakes",
        img : "https://media.istockphoto.com/id/1271917509/vector/illustration-of-pancake-illustration-like-hand-drawn-illustration-with-ink-and-brush.jpg?s=612x612&w=0&k=20&c=YmaCu5FSBMxuTzID0173PZ6AfsBy4oj-mOjOZHhms_Y="
    }
]
const grid = document.querySelector(".grid")
const shuffledArray = cardArray.sort(function(){
    return 0.5 - Math.random()
})

function createBoard(){
    for (let i = 0; i <  shuffledArray.length; i++){
        card = document.createElement("img")//creating an image of card so we are creating an image element
        card.setAttribute("src", "https://images.fineartamerica.com/images-medium-large-5/10-pixel-art-square-mike-taylor.jpg")
        card.setAttribute("value", i)
        card.addEventListener("click", revealCard)
        grid.appendChild(card)
    }
}
createBoard()

chosenCard = []
console.log(chosenCard)

function revealCard(){
    let cardNum = this.getAttribute("value")   //"this" is the card which is being event-listened 
    chosenCard.push(shuffledArray[cardNum].name)
    this.setAttribute("src", shuffledArray[cardNum].img)
    if (chosenCard.length === 2){
        checkIfMatch()
    }
}

function checkIfMatch(){
    match = false
    for (j=0; j<chosenCard.length; j++){
        for (k=j+1; k<chosenCard.length; k++){
            if (k!=j && chosenCard[j] === chosenCard[k]){
                match = true
                console.log("Hooray!")
                chosenCard = []
            } else {
                console.log("Try again")
                //need to make it revert to original pixel image
            }
        }
    }
}


//TIMER
const startTimer = document.querySelector("#startTimer")
const tick = document.querySelector("#timerCount")

function updateTicks(num) {
    tick.textContent = num
  }

let count = Number(tick.textContent)

startTimer.addEventListener("click", function(){
    interval = setInterval(() => {
      count--
      updateTicks(count)
    }, 1000)
    startTimer.disabled = true
  })
