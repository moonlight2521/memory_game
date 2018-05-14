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
let gameGrid = cardsArray.concat(cardsArray);

gameGrid.sort(() => 0.5 - Math.random());
//grab the div with an id of root
const game = document.getElementById('game');

//create a section with a class of grid
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

//appand the grid section to the game
game.appendChild(grid);

//for each item in the cardArray
gameGrid.forEach(item => {
    //create a div for each card
    const card = document.createElement('div');
    //apply a card class to the div
    card.classList.add('card');
    //set the data-name attribute of the div to the cardArray name
    card.dataset.name = item.name;
    //set the background image of the div to the cardArray img
    card.style.backgroundImage = `url(${item.img})`;
    //append the div to the grid section
    grid.appendChild(card);
})

