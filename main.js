hiddenCard = "https://images.fineartamerica.com/images-medium-large-5/10-pixel-art-square-mike-taylor.jpg" 
const grid = document.querySelector(".grid")
let wrongCards = document.getElementById("wrong_tries")
let correctCards = document.getElementById("cards_won")

let correct = Number(correctCards.textContent)
let wrong = Number(wrongCards.textContent)


let cardsChosen = [] 
let gridSpot = []
let cardsWon=[]
const organizedArray = [
    {name : "Pizza", img : "https://therecipecritic.com/wp-content/uploads/2019/05/besthomemadepizzahero.jpg"
    },
    {name : "Pizza", img : "https://therecipecritic.com/wp-content/uploads/2019/05/besthomemadepizzahero.jpg"
    },
    {name : "Mango", img : "https://www.agroponiente.com/wp-content/uploads/2021/08/mango-Agroponiente.png"
    },
    {name : "Mango", img : "https://www.agroponiente.com/wp-content/uploads/2021/08/mango-Agroponiente.png"
    },
    {name : "Ice Cream", img : "https://images.news18.com/ibnlive/uploads/2022/01/ice-cream.jpg"
    },
    {name : "Ice Cream", img : "https://images.news18.com/ibnlive/uploads/2022/01/ice-cream.jpg"
    },
    {name : "Pancakes", img : "https://assets.bonappetit.com/photos/622a6c4f7d1e521b467c3d0b/1:1/w_2360,h_2360,c_limit/20220307%20A%20SKEPTIC%20TRIES%20PANCAKES%20LEDE.jpg"
    },
    {name : "Pancakes", img : "https://assets.bonappetit.com/photos/622a6c4f7d1e521b467c3d0b/1:1/w_2360,h_2360,c_limit/20220307%20A%20SKEPTIC%20TRIES%20PANCAKES%20LEDE.jpg"
    },
    {name : "Waffles", img : "https://www.momontimeout.com/wp-content/uploads/2021/10/waffle-recipe-square-500x500.jpeg"
    },
    {name : "Waffles", img : "https://www.momontimeout.com/wp-content/uploads/2021/10/waffle-recipe-square-500x500.jpeg"
    },
    {name : "Watermelon", img : "https://www.simplyrecipes.com/thmb/o5vKA2D5VB31GrgQjvTnTQtrl4E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-HT-Cut-Watermelon-LEAD-3-5002c6a583bf4821a92bb7cb640bdb03.jpg"
    },
    {name : "Watermelon", img : "https://www.simplyrecipes.com/thmb/o5vKA2D5VB31GrgQjvTnTQtrl4E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-HT-Cut-Watermelon-LEAD-3-5002c6a583bf4821a92bb7cb640bdb03.jpg"
    },
    {name : "Taco", img : "https://www.jocooks.com/wp-content/uploads/2020/08/ground-beef-tacos-1-11.jpg"
    },
    {name : "Taco", img : "https://www.jocooks.com/wp-content/uploads/2020/08/ground-beef-tacos-1-11.jpg"
    },
    {name : "Cappucino", img : "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino"
    },
    {name : "Cappucino", img : "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-07-Cappuccino%2FCappuccino"
    },
    {name : "Matcha", img : "https://cdn.loveandlemons.com/wp-content/uploads/2020/04/matcha.jpg"
    },
    {name : "Matcha", img : "https://cdn.loveandlemons.com/wp-content/uploads/2020/04/matcha.jpg"
    },
    {name : "Oreo Cupcake", img : "https://chocolatecoveredkatie.com/wp-content/uploads/2022/08/Oreo-Cookie-Cupcakes-With-Cookies-And-Cream-Frosting.jpg"
    },
    {name : "Oreo Cupcake", img : "https://chocolatecoveredkatie.com/wp-content/uploads/2022/08/Oreo-Cookie-Cupcakes-With-Cookies-And-Cream-Frosting.jpg"
    },
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
        setTimeout(checkIfMatch, 1000)//if there is no interval, there is 0 seconds the amount of time the second image is displayed
    }
}

function cardswrong(wrong) {
    wrongCards.textContent = wrong
}
function correctcards(correct) {
    correctCards.textContent = correct
}

function checkIfMatch () {
    let cards = document.querySelectorAll("img")
    const choice1spot = gridSpot[0]
    const choice2spot = gridSpot[1]
    if (cardsChosen[0] === cardsChosen[1]){
        cardsWon.push(cardsChosen)
        correct++
        correctcards(correct)
    }else{
        cards[choice1spot].setAttribute("src", hiddenCard)
        cards[choice2spot].setAttribute("src", hiddenCard)
        wrong++
        cardswrong(wrong)
    }
    cardsChosen = []
    gridSpot = []
    if (cardsWon.length === cardArray.length/2){
        alert("Congratulations! You've found all of them!")
    }
}


