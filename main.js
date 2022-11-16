cardArray = [
    {
        name : "Pizza", 
        img : "pizza.img"
    },
    {
        name : "Hot Dog", 
        img : "hotdog.img"
    },
    {
        name : "Ice Cream",
        img : "icecream.img"
    }
]
const grid = document.querySelector(".grid")
console.log(grid)

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        console.log(cardArray[i])
        card = document.createElement("img")//creating an image of card so we are creating an image element
        // card.setAttribute("src", cardArray[i])
        // card.setAttribute("value", i)
        grid.appendChild(card)
        console.log(grid)
    } 
}

createBoard()

