const players = [
    {
        id: 1,
        Name: "Alan Shearer",
        Appearences: 441,
        Goals: 260,
        Assists: 64,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1.png"
    },
    {
        id: 2,
        Name: "Wayne Rooney",
        Appearences: 491,
        Goals: 208,
        Assists: 103,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p13017.png"
    },
    {
        id: 3,
        Name: "Andrew Cole",
        Appearences: 414,
        Goals: 187,
        Assists: 73,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1820.png"
    },
    {
        id: 4,
        Name: "Sergio Aguero",
        Appearences: 275,
        Goals: 184,
        Assists: 47,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p37572.png"
    },
    {
        id: 5,
        Name: "Harry Kane",
        Appearences: 282,
        Goals: 183,
        Assists: 43,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p78830.png"
    },
    {
        id: 6,
        Name: "Frank Lampard",
        Appearences: 609,
        Goals: 177,
        Assists: 102,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p2051.png"
    },
    {
        id: 7,
        Name: "Thierry Henry",
        Appearences: 258,
        Goals: 175,
        Assists: 74,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1619.png"
    },
    {
        id: 8,
        Name: "Robbie Fowler",
        Appearences: 379,
        Goals: 163,
        Assists: 39,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1794.png"
    },
    {
        id: 9,
        Name: "Jermaine Defoe",
        Appearences: 496,
        Goals: 162,
        Assists: 33,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p7958.png"
    },
    {
        id: 10,
        Name: "Michael Owen",
        Appearences: 326,
        Goals: 150,
        Assists: 31,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1795.png"
    },
    {
        id: 11,
        Name: "Les Ferdinand",
        Appearences: 351,
        Goals: 149,
        Assists: 49,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1904.png"
    },
    {
        id: 12,
        Name: "Teddy Sheringham",
        Appearences: 418,
        Goals: 146,
        Assists: 76,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p520.png"
    },
    {
        id: 13,
        Name: "Robin Van Persie",
        Appearences: 280,
        Goals: 144,
        Assists: 53,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p12297.png"
    },
    {
        id: 14,
        Name: "Jamie Vardy",
        Appearences: 270,
        Goals: 133,
        Assists: 40,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p101668.png"
    },
    {
        id: 15,
        Name: "Jimmy Floyd Hasselbaink",
        Appearences: 288,
        Goals: 127,
        Assists: 58,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p4074.png"
    },
    {
        id: 16,
        Name: "Robbie Keane",
        Appearences: 349,
        Goals: 126,
        Assists: 37,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1710.png"
    },
    {
        id: 17,
        Name: "Nicolas Anelka",
        Appearences: 364,
        Goals: 125,
        Assists: 48,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p3897.png"
    },
    {
        id: 18,
        Name: "Dwight Yorke",
        Appearences: 375,
        Goals: 123,
        Assists: 50,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1829.png"
    },
    {
        id: 19,
        Name: "Romelu Lukaku",
        Appearences: 278,
        Goals: 121,
        Assists: 35,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p66749.png"
    },
    {
        id: 20,
        Name: "Steven Gerrard",
        Appearences: 504,
        Goals: 120,
        Assists: 92,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1814.pngg"
    },
    {
        id: 21,
        Name: "Mohamed Salah",
        Appearences: 193,
        Goals: 120,
        Assists: 47,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png"
    },
    {
        id: 22,
        Name: "Ian Wright",
        Appearences: 213,
        Goals: 113,
        Assists: 22,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p2070.png"
    },
    {
        id: 23,
        Name: "Dion Dublin",
        Appearences: 312,
        Goals: 111,
        Assists: 40,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1614.png"
    },
    {
        id: 24,
        Name: "Sadio Mane",
        Appearences: 263,
        Goals: 111,
        Assists: 38,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p110979.png"
    },
    {
        id: 25,
        Name: "Emile Heskey",
        Appearences: 516,
        Goals: 110,
        Assists: 53,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p1765.png"
    },
    {
        id: 26,
        Name: "Ryan Giggs",
        Appearences: 632,
        Goals: 109,
        Assists: 162,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p3.png"
    },
    {
        id: 27,
        Name: "Raheem Sterling",
        Appearences: 320,
        Goals: 109,
        Assists: 56,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p103955.png"
    },
    {
        id: 28,
        Name: "Peter Crouch",
        Appearences: 468,
        Goals: 108,
        Assists: 58,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p3773.png"
    },
    {
        id: 29,
        Name: "Paul Scholes",
        Appearences: 499,
        Goals: 107,
        Assists: 55,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p363.png"
    },
    {
        id: 30,
        Name: "Darren Bent",
        Appearences: 276,
        Goals: 106,
        Assists: 15,
        Image: "https://resources.premierleague.com/premierleague/photos/players/250x250/p10738.png"
    }
]