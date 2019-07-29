var pokemon = {
  pikachu: {
    name: "Pikachu",
    hp: 35,
    attack: 6,
    image: require("./images/pikachu.png"),
    type: require("./images/electric.jpg"),
    role: "A",
    numRequired: 4,
    evolvesTo: "Raichu"
  },
  raichu: {
    name: "Raichu",
    hp: 60,
    attack: 9,
    image: require("./images/raichu.png"),
    type: require("./images/electric.jpg"),
    role: "A",
    numRequired: Infinity,
    evolvesTo: null
  },
  charmander: {
    name: "Charmander",
    hp: 39,
    attack: 6,
    image: require("./images/charmander.png"),
    type: require("./images/fire.jpg"),
    role: "SA",
    numRequired: 3,
    evolvesTo: "Charmeleon"
  },
  charmeleon: {
    name: "Charmeleon",
    hp: 58,
    attack: 8,
    image: require("./images/charmeleon.png"),
    type: require("./images/fire.jpg"),
    role: "SA",
    numRequired: 3,
    evolvesTo: "charizard"
  },
  charizard: {
    name: "Charizard",
    hp: 78,
    attack: 11,
    image: require("./images/charizard.png"),
    type: require("./images/fire.jpg"),
    role: "SA",
    numRequired: Infinity,
    evolvesTo: null
  },
  bulbasaur: {
    name: "Bulbasaur",
    hp: 45,
    attack: 7,
    image: require("./images/bulbasaur.png"),
    type: require("./images/grass.jpg"),
    role: "AA",
    numRequired: 3,
    evolvesTo: "Ivysaur"
  },
  ivysaur: {
    name: "Ivysaur",
    hp: 60,
    attack: 8,
    image: require("./images/ivysaur.png"),
    type: require("./images/grass.jpg"),
    role: "AA",
    numRequired: 3,
    evolvesTo: "Ivysaur"
  },
  venusaur: {
    name: "Venusaur",
    hp: 80,
    attack: 10,
    image: require("./images/venusaur.png"),
    type: require("./images/grass.jpg"),
    role: "AA",
    numRequired: Infinity,
    evolvesTo: null
  },
  squirtle: {
    name: "Squirtle",
    hp: 44,
    image: require("./images/squirtle.png"),
    type: require("./images/water.jpg"),
    role: "D",
    numRequired: 3,
    evolvesTo: "Wartortle"
  },
  wartortle: {
    name: "Wartortle",
    hp: 59,
    attack: 6,
    image: require("./images/wartortle.png"),
    type: require("./images/water.jpg"),
    role: "D",
    numRequired: 3,
    evolvesTo: "Wartortle"
  },
  blastoise: {
    name: "Blastoise",
    hp: 79,
    attack: 9,
    image: require("./images/blastoise.png"),
    type: require("./images/water.jpg"),
    role: "D",
    numRequired: Infinity,
    evolvesTo: null
  },

  rattata: {
    name: "Rattata",
    hp: 30,
    attack: 6,
    image: require("./images/rattata.png"),
    type: require("./images/normal.jpg"),
    role: "PA",
    numRequired: 2,
    evolvesTo: "Raticate"
  },
  raticate: {
    name: "Raticate",
    hp: 55,
    attack: 6,
    image: require("./images/raticate.png"),
    type: require("./images/normal.jpg"),
    role: "PA",
    numRequired: Infinity,
    evolvesTo: null
  }
};

export default pokemon;
