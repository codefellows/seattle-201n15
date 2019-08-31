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

