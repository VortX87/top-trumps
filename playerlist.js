const players = [
    {
        Name: "Alan Shearer",
        Appearences: 441,
        Goals: 260,
        Assists: 64,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1.png"
    },
    {
        Name: "Wayne Rooney",
        Appearences: 491,
        Goals: 208,
        Assists: 103,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p13017.png"
    },
    {
        Name: "Andrew Cole",
        Appearences: 414,
        Goals: 187,
        Assists: 73,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1820.png"
    },
    {
        Name: "Sergio Aguero",
        Appearences: 275,
        Goals: 184,
        Assists: 47,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p37572.png"
    },
    {
        Name: "Harry Kane",
        Appearences: 282,
        Goals: 183,
        Assists: 43,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p78830.png"
    },
    {
        Name: "Frank Lampard",
        Appearences: 609,
        Goals: 177,
        Assists: 102,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p2051.png"
    },
    {
        Name: "Thierry Henry",
        Appearences: 258,
        Goals: 175,
        Assists: 74,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1619.png"
    },
    {
        Name: "Robbie Fowler",
        Appearences: 379,
        Goals: 163,
        Assists: 39,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1794.png"
    },
    {
        Name: "Jermaine Defoe",
        Appearences: 496,
        Goals: 162,
        Assists: 33,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p7958.png"
    },
    {
        Name: "Michael Owen",
        Appearences: 326,
        Goals: 150,
        Assists: 31,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1795.png"
    },
    {
        Name: "Les Ferdinand",
        Appearences: 351,
        Goals: 149,
        Assists: 49,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1904.png"
    },
    {
        Name: "Teddy Sheringham",
        Appearences: 418,
        Goals: 146,
        Assists: 76,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p520.png"
    },
    {
        Name: "Robin Van Persie",
        Appearences: 280,
        Goals: 144,
        Assists: 53,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p12297.png"
    },
    {
        Name: "Jamie Vardy",
        Appearences: 270,
        Goals: 133,
        Assists: 40,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p101668.png"
    },
    {
        Name: "Jimmy Floyd Hasselbaink",
        Appearences: 288,
        Goals: 127,
        Assists: 58,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p4074.png"
    },
    {
        Name: "Robbie Keane",
        Appearences: 349,
        Goals: 126,
        Assists: 37,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1710.png"
    },
    {
        Name: "Nicolas Anelka",
        Appearences: 364,
        Goals: 125,
        Assists: 48,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p3897.png"
    },
    {
        Name: "Dwight Yorke",
        Appearences: 375,
        Goals: 123,
        Assists: 50,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1829.png"
    },
    {
        Name: "Romelu Lukaku",
        Appearences: 278,
        Goals: 121,
        Assists: 35,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p66749.png"
    },
    {
        Name: "Steven Gerrard",
        Appearences: 504,
        Goals: 120,
        Assists: 92,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1814.pngg"
    },
    {
        Name: "Mohamed Salah",
        Appearences: 193,
        Goals: 120,
        Assists: 47,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png"
    },
    {
        Name: "Ian Wright",
        Appearences: 213,
        Goals: 113,
        Assists: 22,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p2070.png"
    },
    {
        Name: "Dion Dublin",
        Appearences: 312,
        Goals: 111,
        Assists: 40,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1614.png"
    },
    {
        Name: "Sadio Mane",
        Appearences: 263,
        Goals: 111,
        Assists: 38,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p110979.png"
    },
    {
        Name: "Emile Heskey",
        Appearences: 516,
        Goals: 110,
        Assists: 53,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1765.png"
    },
    {
        Name: "Ryan Giggs",
        Appearences: 632,
        Goals: 109,
        Assists: 162,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p3.png"
    },
    {
        Name: "Raheem Sterling",
        Appearences: 320,
        Goals: 109,
        Assists: 56,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p103955.png"
    },
    {
        Name: "Peter Crouch",
        Appearences: 468,
        Goals: 108,
        Assists: 58,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p3773.png"
    },
    {
        Name: "Paul Scholes",
        Appearences: 499,
        Goals: 107,
        Assists: 55,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p363.png"
    },
    {
        Name: "Darren Bent",
        Appearences: 276,
        Goals: 106,
        Assists: 15,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p10738.png"
    }
]

//Desk Shuffler and dealer
const playerData = players
let playOneHand = [];
let playTwoHand = [];

function shuffleDeck() {
    playerData.sort(() => Math.random() - 0.5)
    console.log(playerData)
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

//PlayerOne card attributes

const playOneCard = document.getElementById('playerOne')
const playerOneName = document.createElement('p')
playerOneName.innerText = playOneHand[0].Name
playOneCard.appendChild(playerOneName)

const playerOneImage = document.createElement('IMG')
playerOneImage.setAttribute("src", playOneHand[0].Image);
playerOneImage.setAttribute("width", "200");
playerOneImage.setAttribute("height", "200");
playOneCard.appendChild(playerOneImage)

const playerOneApps = document.createElement('p')
playerOneApps.innerText = playOneHand[0].Appearences
playOneCard.appendChild(playerOneApps)

const playerOneGoals = document.createElement('p')
playerOneGoals.innerText = playOneHand[0].Goals
playOneCard.appendChild(playerOneGoals)

const playerOneAssists = document.createElement('p')
playerOneAssists.innerText = playOneHand[0].Assists
playOneCard.appendChild(playerOneAssists)


// //PlayerTwo Card Attributes

const playTwoCard = document.getElementById('playerTwo')
const playerTwoName = document.createElement('p')
playerTwoName.innerText = playTwoHand[0].Name
playTwoCard.appendChild(playerTwoName)

const playerTwoImage = document.createElement('IMG')
playerTwoImage.setAttribute("src", playTwoHand[0].Image);
playerTwoImage.setAttribute("width", "200");
playerTwoImage.setAttribute("height", "200");
playTwoCard.appendChild(playerTwoImage)

const playerTwoApps = document.createElement('p')
playerTwoApps.innerText = playTwoHand[0].Appearences
playTwoCard.appendChild(playerTwoApps)

const playerTwoGoals = document.createElement('p')
playerTwoGoals.innerText = playTwoHand[0].Goals
playTwoCard.appendChild(playerTwoGoals)

const playerTwoAssists = document.createElement('p')
playerTwoAssists.innerText = playTwoHand[0].Assists
playTwoCard.appendChild(playerTwoAssists)








//Cards to HTML





// Game Logic

function compareAtt(playerOneAtt, playerTwoAtt) {
    if (playerOneAtt > playerTwoAtt) {

    }
}
