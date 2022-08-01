const players = [
    {
        Name: "Alan Shearer",
        Appearences: 441,
        Goals: 260,
        Assists: 64,
        GamesWon: 203,
        GamesLost: 129,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1.png"
    },
    {
        Name: "Wayne Rooney",
        Appearences: 491,
        Goals: 208,
        Assists: 103,
        GamesWon: 284,
        GamesLost: 103,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p13017.png"
    },
    {
        Name: "Andrew Cole",
        Appearences: 414,
        Goals: 187,
        Assists: 73,
        GamesWon: 206,
        GamesLost: 106,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1820.png"
    },
    {
        Name: "Sergio Aguero",
        Appearences: 275,
        Goals: 184,
        Assists: 47,
        GamesWon: 186,
        GamesLost: 45,
        Image: "https://i2-prod.mirror.co.uk/incoming/article23817920.ece/ALTERNATES/s1200c/0_Champions-League-Group-C-Manchester-City-v-Atalanta.jpg"
    },
    {
        Name: "Harry Kane",
        Appearences: 282,
        Goals: 183,
        Assists: 43,
        GamesWon: 157,
        GamesLost: 68,
        Image: "https://i2-prod.football.london/incoming/article23321318.ece/ALTERNATES/s1200c/1_HKane-10.jpg"
    },
    {
        Name: "Frank Lampard",
        Appearences: 609,
        Goals: 177,
        Assists: 102,
        GamesWon: 349,
        GamesLost: 127,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p2051.png"
    },
    {
        Name: "Thierry Henry",
        Appearences: 258,
        Goals: 175,
        Assists: 74,
        GamesWon: 157,
        GamesLost: 39,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1619.png"
    },
    {
        Name: "Robbie Fowler",
        Appearences: 379,
        Goals: 163,
        Assists: 39,
        GamesWon: 164,
        GamesLost: 111,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1794.png"
    },
    {
        Name: "Jermaine Defoe",
        Appearences: 496,
        Goals: 162,
        Assists: 33,
        GamesWon: 185,
        GamesLost: 188,
        Image: "https://www.thesun.co.uk/wp-content/uploads/2022/01/7dbda660-aea2-4e6c-92d3-52854f2640ab.jpg"
    },
    {
        Name: "Michael Owen",
        Appearences: 326,
        Goals: 150,
        Assists: 31,
        GamesWon: 142,
        GamesLost: 95,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1795.png"
    },
    {
        Name: "Les Ferdinand",
        Appearences: 351,
        Goals: 149,
        Assists: 49,
        GamesWon: 138,
        GamesLost: 119,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1904.png"
    },
    {
        Name: "Teddy Sheringham",
        Appearences: 418,
        Goals: 146,
        Assists: 76,
        GamesWon: 184,
        GamesLost: 133,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p520.png"
    },
    {
        Name: "Robin Van Persie",
        Appearences: 280,
        Goals: 144,
        Assists: 53,
        GamesWon: 153,
        GamesLost: 59,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p12297.png"
    },
    {
        Name: "Jamie Vardy",
        Appearences: 270,
        Goals: 133,
        Assists: 40,
        GamesWon: 114,
        GamesLost: 95,
        Image: "https://s.hs-data.com/bilder/spieler/gross/201640.jpg"
    },
    {
        Name: "Jimmy Floyd Hasselbaink",
        Appearences: 288,
        Goals: 127,
        Assists: 58,
        GamesWon: 124,
        GamesLost: 83,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p4074.png"
    },
    {
        Name: "Robbie Keane",
        Appearences: 349,
        Goals: 126,
        Assists: 37,
        GamesWon: 139,
        GamesLost: 122,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1710.png"
    },
    {
        Name: "Nicolas Anelka",
        Appearences: 364,
        Goals: 125,
        Assists: 48,
        GamesWon: 182,
        GamesLost: 95,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p3897.png"
    },
    {
        Name: "Dwight Yorke",
        Appearences: 375,
        Goals: 123,
        Assists: 50,
        GamesWon: 169,
        GamesLost: 116,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1829.png"
    },
    {
        Name: "Romelu Lukaku",
        Appearences: 278,
        Goals: 121,
        Assists: 35,
        GamesWon: 126,
        GamesLost: 85,
        Image: "https://s.hs-data.com/bilder/spieler/gross/142964.jpg"
    },
    {
        Name: "Steven Gerrard",
        Appearences: 504,
        Goals: 120,
        Assists: 92,
        GamesWon: 255,
        GamesLost: 119,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1814.png"
    },
    {
        Name: "Mohamed Salah",
        Appearences: 193,
        Goals: 120,
        Assists: 47,
        GamesWon: 132,
        GamesLost: 23,
        Image: "https://i2-prod.mirror.co.uk/incoming/article26678721.ece/ALTERNATES/s1200c/0_Mo-Salah-Liverpool.jpg"
    },
    {
        Name: "Ian Wright",
        Appearences: 213,
        Goals: 113,
        Assists: 22,
        GamesWon: 90,
        GamesLost: 61,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p2070.png"
    },
    {
        Name: "Dion Dublin",
        Appearences: 312,
        Goals: 111,
        Assists: 40,
        GamesWon: 100,
        GamesLost: 109,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1614.png"
    },
    {
        Name: "Sadio Mane",
        Appearences: 263,
        Goals: 111,
        Assists: 38,
        GamesWon: 162,
        GamesLost: 44,
        Image: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg5ODAyODQ0MTY4MTM2Mzgw/sadio-mane.jpg"
    },
    {
        Name: "Emile Heskey",
        Appearences: 516,
        Goals: 110,
        Assists: 53,
        GamesWon: 189,
        GamesLost: 176,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1765.png"
    },
    {
        Name: "Ryan Giggs",
        Appearences: 632,
        Goals: 109,
        Assists: 162,
        GamesWon: 407,
        GamesLost: 87,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p3.png"
    },
    {
        Name: "Raheem Sterling",
        Appearences: 320,
        Goals: 109,
        Assists: 56,
        GamesWon: 204,
        GamesLost: 63,
        Image: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg2MDcyMTQ2NzIyNjk0Mjcz/raheem-sterling.jpg"
    },
    {
        Name: "Peter Crouch",
        Appearences: 468,
        Goals: 108,
        Assists: 58,
        GamesWon: 166,
        GamesLost: 170,
        Image: "https://s.hs-data.com/bilder/spieler/gross/9922.jpg"
    },
    {
        Name: "Paul Scholes",
        Appearences: 499,
        Goals: 107,
        Assists: 55,
        GamesWon: 321,
        GamesLost: 72,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p363.png"
    },
    {
        Name: "Darren Bent",
        Appearences: 276,
        Goals: 106,
        Assists: 15,
        GamesWon: 79,
        GamesLost: 119,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p10738.png"
    }
]

//Desk Shuffler and dealer
const playerData = players
let playOneHand = [];
let playTwoHand = [];

function shuffleDeck() {
    playerData.sort(() => Math.random() - 0.5)
    // console.log(playerData)
    return playerData
}
shuffleDeck();

for (i = 0; i < 30; i++) {
    if ([i] % 2 != 0) {
        playOneHand.push(playerData[i])
    } else if ([i] % 2 == 0) {
        playTwoHand.push(playerData[i])
    }
}
//console.log(playOneHand, playTwoHand)
//PlayerOne card attributes

const playOneCard = document.getElementById('playerOne')

const playerOneDeckSize = document.createElement('p')
playerOneDeckSize.innerText = 'Your Cards: ' + playOneHand.length
playOneCard.appendChild(playerOneDeckSize)

const playerOneName = document.createElement('p')
playerOneName.innerText = playOneHand[0].Name
playOneCard.appendChild(playerOneName)

const playerOneImage = document.createElement('IMG')
playerOneImage.setAttribute("src", playOneHand[0].Image);
playerOneImage.setAttribute("width", "140");
playerOneImage.setAttribute("height", "140");
playOneCard.appendChild(playerOneImage)

const playerOneApps = document.createElement('p')
playerOneApps.innerText = 'Appearences: ' + playOneHand[0].Appearences
playOneCard.appendChild(playerOneApps)

const playerOneGoals = document.createElement('p')
playerOneGoals.innerText = 'Goals: ' + playOneHand[0].Goals
playOneCard.appendChild(playerOneGoals)

const playerOneAssists = document.createElement('p')
playerOneAssists.innerText = 'Assists: ' + playOneHand[0].Assists
playOneCard.appendChild(playerOneAssists)

const playerOneWonG = document.createElement('p')
playerOneWonG.innerText = 'Games Won: ' + playOneHand[0].GamesWon
playOneCard.appendChild(playerOneWonG)

const playerOneLostG = document.createElement('p')
playerOneLostG.innerText = 'Games Lost: ' + playOneHand[0].GamesLost
playOneCard.appendChild(playerOneLostG)


// //PlayerTwo Card Attributes

const playTwoCard = document.getElementById('playerTwo')

const playerTwoDeckSize = document.createElement('p')
playerTwoDeckSize.innerText = 'Computers Cards: ' + playTwoHand.length
playTwoCard.appendChild(playerTwoDeckSize)

const playerTwoName = document.createElement('p')
playerTwoName.innerText = playTwoHand[0].Name
playTwoCard.appendChild(playerTwoName)

const playerTwoImage = document.createElement('IMG')
playerTwoImage.setAttribute("src", playTwoHand[0].Image);
playerTwoImage.setAttribute("width", "200");
playerTwoImage.setAttribute("height", "200");
playTwoCard.appendChild(playerTwoImage)

const playerTwoApps = document.createElement('p')

const playerTwoGoals = document.createElement('p')

const playerTwoAssists = document.createElement('p')

const playerTwoWonG = document.createElement('p')

const playerTwoLostG = document.createElement('p')



//Buttons and Game Logic

const appsButton = document.getElementById("compAppsBtn").addEventListener("click", compApps);
const goalButton = document.getElementById("compGoalsBtn").addEventListener("click", compGoals);
const assButton = document.getElementById("compAssistBtn").addEventListener("click", compAssists);
const wonButton = document.getElementById("compWonBtn").addEventListener("click", compWin);
const lossButton = document.getElementById("compLossBtn").addEventListener("click", compLoss);

const nextRound = document.getElementById("nextRoundBtn").addEventListener("click", nextTurn);


function compApps() {
    playerTwoApps.innerText = 'Appearences: ' + playTwoHand[0].Appearences
    playTwoCard.appendChild(playerTwoApps)
    if (playOneHand[0].Appearences > playTwoHand[0].Appearences) {
        playOneHand.push(playOneHand[0])
        playOneHand.push(playTwoHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('You win this round')
    } else if (playTwoHand[0].Appearences > playOneHand[0].Appearences) {
        playTwoHand.push(playTwoHand[0])
        playTwoHand.push(playOneHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('The computer wins this round')
    } else if (playTwoHand[0].Appearences === playOneHand[0].Appearences) {
        playTwoHand.push(playTwoHand[0])
        playOneHand.push(playOneHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('Its a draw, try again with your next player')
    }
}
console.log(playOneHand, playTwoHand)


function compGoals() {
    playerTwoGoals.innerText = 'Goals: ' + playTwoHand[0].Goals
    playTwoCard.appendChild(playerTwoGoals)
    if (playOneHand[0].Goals > playTwoHand[0].Goals) {
        playOneHand.push(playOneHand[0])
        playOneHand.push(playTwoHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('You win this round')
    } else if (playTwoHand[0].Goals > playOneHand[0].Goals) {
        playTwoHand.push(playTwoHand[0])
        playTwoHand.push(playOneHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('The computer wins this round')
    } else if (playTwoHand[0].Goals === playOneHand[0].Goals) {
        playTwoHand.push(playTwoHand[0])
        playOneHand.push(playOneHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('Its a draw, try again with your next player')
    }
}

function compAssists() {
    playerTwoAssists.innerText = 'Assists: ' + playTwoHand[0].Assists
    playTwoCard.appendChild(playerTwoAssists)
    if (playOneHand[0].Assists > playTwoHand[0].Assists) {
        playOneHand.push(playOneHand[0])
        playOneHand.push(playTwoHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('You win this round')
    } else if (playTwoHand[0].Assists > playOneHand[0].Assists) {
        playTwoHand.push(playTwoHand[0])
        playTwoHand.push(playOneHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('The computer wins this round')
    } else if (playTwoHand[0].Assists === playOneHand[0].Assists) {
        playTwoHand.push(playTwoHand[0])
        playOneHand.push(playOneHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('Its a draw, try again with your next player')
    }
}
function compWin() {
    playerTwoWonG.innerText = 'Games Won: ' + playTwoHand[0].GamesWon
    playTwoCard.appendChild(playerTwoWonG)
    if (playOneHand[0].GamesWon > playTwoHand[0].GamesWon) {
        playOneHand.push(playOneHand[0])
        playOneHand.push(playTwoHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('You win this round')
    } else if (playTwoHand[0].GamesWon > playOneHand[0].GamesWon) {
        playTwoHand.push(playTwoHand[0])
        playTwoHand.push(playOneHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('The computer wins this round')
    } else if (playTwoHand[0].GamesWon === playOneHand[0].GamesWon) {
        playTwoHand.push(playTwoHand[0])
        playOneHand.push(playOneHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('Its a draw, try again with your next player')
    }
}
function compLoss() {
    playerTwoLostG.innerText = 'Games Lost: ' + playTwoHand[0].GamesLost
    playTwoCard.appendChild(playerTwoLostG)
    if (playOneHand[0].GamesLost < playTwoHand[0].GamesLost) {
        playOneHand.push(playOneHand[0])
        playOneHand.push(playTwoHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('You win this round')
    } else if (playTwoHand[0].GamesLost < playOneHand[0].GamesLost) {
        playTwoHand.push(playTwoHand[0])
        playTwoHand.push(playOneHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('The computer wins this round')
    } else if (playTwoHand[0].GamesLost === playOneHand[0].GamesLost) {
        playTwoHand.push(playTwoHand[0])
        playOneHand.push(playOneHand[0])
        playOneHand.shift()
        playTwoHand.shift()
        alert('Its a draw, try again with your next player')
    }
}



function nextTurn() {
    playerOneDeckSize.innerText = 'Your Cards: ' + playOneHand.length
    playerTwoDeckSize.innerText = 'Computers Cards: ' + playTwoHand.length
    if (playOneHand.length === 30) {
        alert("Player1 has won the game!!!!")
    } else if (playTwoHand.length === 30) {
        alert("Computer has won the game!!!!")
    }
    playerTwoName.innerText = playTwoHand[0].Name
    playTwoCard.appendChild(playerTwoName);
    playerTwoImage.setAttribute("src", playTwoHand[0].Image);
    playerTwoImage.setAttribute("width", "200");
    playerTwoImage.setAttribute("height", "200");
    playTwoCard.appendChild(playerTwoImage);
    playerTwoApps.innerText = '';
    playTwoCard.appendChild(playerTwoApps);
    playerTwoGoals.innerText = '';
    playTwoCard.appendChild(playerTwoGoals);
    playerTwoAssists.innerText = ''
    playTwoCard.appendChild(playerTwoAssists)
    playerTwoWonG.innerText = ''
    playTwoCard.appendChild(playerTwoWonG)
    playerTwoLostG.innerText = ''
    playTwoCard.appendChild(playerTwoLostG)

    playerOneName.innerText = playOneHand[0].Name
    playOneCard.appendChild(playerOneName)
    playerOneImage.setAttribute("src", playOneHand[0].Image);
    playerOneImage.setAttribute("width", "140");
    playerOneImage.setAttribute("height", "140");
    playOneCard.appendChild(playerOneImage)
    playerOneApps.innerText = 'Appearences: ' + playOneHand[0].Appearences
    playOneCard.appendChild(playerOneApps)
    playerOneGoals.innerText = 'Goals: ' + playOneHand[0].Goals
    playOneCard.appendChild(playerOneGoals)
    playerOneAssists.innerText = 'Assists: ' + playOneHand[0].Assists
    playOneCard.appendChild(playerOneAssists)
    playerOneWonG.innerText = 'Games Won: ' + playOneHand[0].GamesWon
    playOneCard.appendChild(playerOneWonG)
    playerOneLostG.innerText = 'Games Lost: ' + playOneHand[0].GamesLost
    playOneCard.appendChild(playerOneLostG)


}
// //Winning COndition

// if (playOneHand.length === 30) {
//     alert("Player1 has won the game!!!!")
// } else if (playTwoHand.length === 30) {
//     alert("Player2 has won the game!!!!")
// }