'use strict';

var catListEl = document.getElementById('pet-list');

var cookie = {
  name: 'cookie',
  color: 'brown',
  isLoud: false,
  sheds: true
}

var malaki = {
  name: 'malaki', 
  color: ['orange', 'white'],
  isLoud: true,
  sheds: false
}

var tangerine = {
  name: 'tangerine',
  color: ['orange', 'white'],
  isLoud: false,
  sheds: true
}

// GOAL: GET THE NAMES OF MY PETS TO APPEAR IN THE DOM

// THREE STEPS
// 1. create an element
// 2. give it content
// 2. append it to the DOM

// we need a render function that will render this to the DOM
  // create an li
  // add the content - the name of the pet
  // append it to the DOM - stick it onto the ul

var myPetsName = [cookie.name, malaki.name, tangerine.name];

function render(){
  for(var i = 0; i < myPetsName.length; i++){
    // make an li
    var liEl = document.createElement('li');

    // give it content - the name
    liEl.textContent = myPetsName[i];

    // stick it on the DOM - to the UL
    catListEl.appendChild(liEl);
  }
}


render();