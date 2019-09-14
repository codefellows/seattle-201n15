'use strict';

var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var containerEl = document.getElementById('picture-container');

// imageOneEl.src = 'img/boxCat.jpg';
// imageOneEl.title = 'boxCat';
// imageOneEl.alt = 'boxCat';

// imageTwoEl.src = 'img/yogaCat.jpg';
// imageTwoEl.title = 'yogaCat';
// imageTwoEl.alt = 'yogaCat';

// render two random images to the DOM from an array of images
var allCats = [];

function Cat(name){
  this.alt = name;
  this.title = name;
  this.src = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;

  allCats.push(this);
}

function imageGenerator(){

  var index = random(allCats.length);
  
  imageOneEl.src = allCats[index].src;
  imageOneEl.alt = allCats[index].alt;
  imageOneEl.title = allCats[index].title;

  allCats[index].views++;

  var indexTwo = random(allCats.length);

  // as long as indexTwo is the same as index, keep getting a new indexTwo
  while(indexTwo === index){
    indexTwo = random(allCats.length);
  }

  imageTwoEl.src = allCats[indexTwo].src;
  imageTwoEl.alt = allCats[indexTwo].alt;
  imageTwoEl.title = allCats[indexTwo].title;

  allCats[indexTwo].views++;
}

// using code from MDN docs on Math.random()
// max is the length of the array
function random(max){
  return Math.floor(Math.random() * Math.floor(max));
}

new Cat('boxCat');
new Cat('chargingCat');
new Cat('cuddleCats');
new Cat('multiTaskingCat');
new Cat('outsideCat');
new Cat('sleepyCat');
new Cat('tomatoCat');
new Cat('yogaCat');

function handleClick(event){
  var clickedCat = event.target.title;

  for(var i = 0; i < allCats.length; i++){
    // loop over my allCats array
    // find the cat instance that has the same name as the cat that was clicked on
    // increment the votes on that cat
    if(clickedCat === allCats[i].title){
      allCats[i].votes++;
    }
  }

  imageGenerator();
}

containerEl.addEventListener('click', handleClick);

imageGenerator();

// keep track of how many times an image was clicked on