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

// THREE STEPS
// 1 - create an element
// 2 - give it content
// 3 - append it to the DOM

//need to create a render function that will render this to the DOM
  //create an li
  //add the content - the name of the pet
  //append it to the DOM - stick it onto the ul

// var myPetName = [cookie.name, malaki.name, tangerine.name];
// function render () {
//   for (var i = 0; i < myPetName.length; i++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = myPetName[i];
//     catListEl.appendChild(liEl);
//   }
// }
// render ();

function render(object) {
  var liEl = document.createElement('li');
  liEl.textContent = object.name;
  catListEl.appendChild(liEl);
}

render(cookie);
render(malaki);
render(tangerine);