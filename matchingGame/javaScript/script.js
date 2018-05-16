//construct a card array
const cardsArray = [
    {
        'name': 'shell',
        'img': 'img/blueshell.png',
    },
    {
        'name': 'star',
        'img': 'img/star.png',
      },
      {
        'name': 'bobomb',
        'img': 'img/bobomb.png',
      },
      {
        'name': 'mario',
        'img': 'img/mario.png',
      },
      {
        'name': 'luigi',
        'img': 'img/luigi.png',
      },
      {
        'name': 'peach',
        'img': 'img/peach.png',
      },
      {
        'name': '1up',
        'img': 'img/1up.png',
      },
      {
        'name': 'mushroom',
        'img': 'img/mushroom.png',
      },
      {
        'name': 'thwomp',
        'img': 'img/thwomp.png',
      },
      {
        'name': 'bulletbill',
        'img': 'img/bulletbill.png',
      },
      {
        'name': 'coin',
        'img': 'img/coin.png',
      },
      {
        'name': 'goomba',
        'img': 'img/goomba.png',
      },
];
//Duplicate array to create a match for for each card
const gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

//declear variables 
let count = 0;
let firstGuess = '';
let secondGuess = '';
let previousTerget = null;
let delay = 1000;

//grab the div with an id of root
const game = document.getElementById('game');
//create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

//appand the grid section to the game
game.appendChild(grid);

//for each item in the cardArray
gameGrid.forEach(item => {
    const{name, img} = item;
    //create a div for each card
    const card = document.createElement('div');
    //apply a card class to the div
    card.classList.add('card');
    //set the data-name attribute of the div to the cardArray name
    card.dataset.name = name;

    //create front of the card
    const front = document.createElement('div');
    front.classList.add('front');

    //create back of the card
    const back = document.createElement('div');
    back.classList.add('back');
    //set the background image of the div to the cardArray img
    back.style.backgroundImage = `url(${img})`;

    //append the div to the grid section and append front and back to the card
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});
//add match CSS 
const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTerget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

//add event listener to the grid
grid.addEventListener('click', event => {
  //the event target is when item is clicked
  const clicked = event.target;

  //if the grid section itself is selected do noting
  if (clicked.nodeName === 'SECTION' || clicked === previousTerget || 
  clicked.parentNode.classList.contains('selected') || 
  clicked.parentNode.classList.contains('match')) {return;}

  if (count < 2) {
    count++;
    if (count === 1){
      //assign first click
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      //assign second click
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
    }
    if (firstGuess && secondGuess){
      // if first guess matches with second guess run the match fuction
      if (firstGuess === secondGuess){
        //run the match function
        setTimeout(match, delay);
      } 
      setTimeout(resetGuesses, delay);
    }
    //set previous target to clicked
    previousTerget = clicked;
  }
});
