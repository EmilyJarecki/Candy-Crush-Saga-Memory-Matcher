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
shuffledArray = cardArray.sort(function(){
    return 0.5 - Math.random()
})
console.log(shuffledArray)

function createBoard(){
    for (let i = 0; i <  shuffledArray.length; i++){
        card = document.createElement("img")//creating an image of card so we are creating an image element
        card.setAttribute("src", shuffledArray[i].img)
        card.setAttribute("value", shuffledArray[i].name)
        card.addEventListener("click", revealCard)
        grid.appendChild(card)
    }
}
createBoard()

chosenCard = []

function revealCard(){
    let cardName = this.getAttribute("value")   //"this" is the card which is being event-listened 
    chosenCard.push(cardName)
    console.log(chosenCard)
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
            } else {
                console.log("Try again")
            }
        }
    }
}