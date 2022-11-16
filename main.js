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

function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        card = document.createElement("img")//creating an image of card so we are creating an image element
        card.setAttribute("src", cardArray[i].img)
        card.setAttribute("value", i)
        card.addEventListener("click", revealCard)
        grid.appendChild(card)
    // }for (let j=0)
    }
}
createBoard()
function revealCard(card){
    console.log(card.name)
}