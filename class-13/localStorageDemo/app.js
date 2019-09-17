'use strict';

var allCats = [];

function Cat(name, age, color){
  this.name = name;
  this.age = age;
  this.color = color;

  allCats.push(this);
}

new Cat('Shaya', 8, 'black');
new Cat('Tangerine', 4, 'orange');
new Cat('Kit', 2, 'beige');

////////////ORIGINAL CATS/////////
console.log('the original cats:', allCats);

/////////STRINGFY/////////////

var stringifyedCats = JSON.stringify(allCats);
console.log('stringified cats', stringifyedCats);

///////////STORE IT IN LOCAL STORAGE//////////

localStorage.setItem('cats', stringifyedCats);
console.log('my local storage is: ', localStorage);

/////////////GET ITEMS FROM LOCAL STORAGE/////////

var localStorageCats = localStorage.getItem('cats');
console.log('my cats from local storage', localStorageCats);

////////////PARSE LOCAL STOARGE ITEMS//////////

var parsedCats = JSON.parse(localStorageCats);
console.log('my parsed cats are:', parsedCats);