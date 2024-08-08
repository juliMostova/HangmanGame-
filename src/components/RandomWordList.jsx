
const guess_colors = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "green",
    "lime",
    "olive",
    "yellow",
    "navy",
    "blue",
    "teal",
    "aqua",
    "aliceblue",
    "aquamarine",
    "beige",
    "brown",
    "burlywood",
    "cadetblue",
    "coral",
    "chocolate",
    "crimson",
    "cyan",
    "darkcyan",
    "orange",
    "gold",
    "pink",
    "khaki",
    "mistyrose",
    "plum",
    "springgreen",
    "wheat",
    "salmon",
  ];
  
  const guess_animals = [
    "lion",
    "cow",
    "shark",
    "rabbit",
    "duck",
    "monkey",
    "goat",
    "koala",
    "tiger",
    "penguin",
    "panda",
    "bear",
    "horse",
    "girafee",
    "lizard",
    "zebra",
  ];
  
  const guess_countries = [
    "france",
    "china",
    "spain",
    "italy",
    "canada",
    "peru",
    "brasil",
    "argentina",
    "colombia",
    "mexico",
    "japan",
    "thailand",
    "england",
    "israel",
    "egypt",
  ];
  

  const randomWordList = (type = 'animals')=>{
let wordList;

    switch(type){
      case 'countries':
        wordList = guess_countries;
        break;
        case 'colors':
          wordList = guess_colors;
          break;
          case 'animals':
            default:
              wordList = guess_animals;
              break;
    }
    return wordList[Math.floor(Math.random() * wordList.length)];
  }

  export default randomWordList;