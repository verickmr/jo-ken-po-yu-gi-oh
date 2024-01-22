const state = {
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score-points")
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type")
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card")
    },
    actions:{
        button: document.getElementById("next-duel")
    }
}

const pathImg = "./src/assets/icons/"

const cardData = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImg}dragon.png`,
        winOf: [1],
        loseOf: [2]
    },
    {
        id: 1,
        name: "Exodia",
        type: "Rock",
        img: `${pathImg}exodia.png`,
        winOf: [2],
        loseOf: [0]
    },
    {
        id: 2,
        name: "Dark Magician",
        type: "Scissor",
        img: `${pathImg}magician.png`,
        winOf: [0],
        loseOf: [1]
    }
]

const views = {

}

const playerSide = {
    player1: "player-field-card",
    computer: "computer-field-card"
}

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length)
    return cardData[randomIndex].id
}

async function createCardImage(idCard, fieldSide){
    const cardImage = document.createElement("img")
    cardImage.setAttribute("height","100px")
    cardImage.setAttribute("src", ".src/assets/icons/card-back.png")
    cardImage.setAttribute("data-id", idCard)
    cardImage.classList.add("card")

    if(fieldSide === playerSide.player1){
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAnimations("data-id"))
        })
    }

    cardImage.addEventListener("mouseover", () => {
        drawSelectCard(idCard)
    })

    return cardImage
}

async function drawCards(cardNumbers, fieldSide) {
    for(i = 1; i< cardNumbers; i++ ) {
        const randomIdCard = await getRadomCardId()
        const cardImg = await createCardImage(randomIdCard, fieldSide)

        document.getElementById(fieldSide).appendChild(cardImg)
    }
}


function init(){
    drawCard(5,playerSide.player1)
    drawCards(5, playerSide.computer)
}

init()