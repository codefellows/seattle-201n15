<<<<<<< HEAD
'use strict';

var allPeopleArr = [];


function People(name, story, animal, hobbies) {
  this.name = name;
  this.story = story;
  this.animal = animal;
  this.hobbies = hobbies;

  allPeopleArr.push(this);
}

new People('Lena', 'superhero', 'alligators', 'staring on animal planet');
new People('Bree', 'hiking', 'dog', 'playing games');
new People('Evan', 'awesome', 'white tiger', 'cuddling');

=======
'use strict';

// Goal: make it so that I can create people instance from a form
var formEl = document.getElementById('form');
var allPeopleArr = [];

function People(name, story, animal){
  this.name = name;
  this.story = story;
  this.animal = animal;

  allPeopleArr.push(this);
}

new People('lena', 'superhero', 'alligators');
new People('Bree', 'hiking', 'dog');

function handleSubmit(e){
  e.preventDefault();

  // get the input from the name
  var username = e.target.username.value;

  // get the input from the story box
  var story = e.target.story.value;

  // get input from animal box
  var animal = e.target.animal.value;

  new People(username, story, animal);
}

formEl.addEventListener('submit', handleSubmit);
>>>>>>> 5de0a6d914fb4e91fa073dda44fced49ac0d56c5
