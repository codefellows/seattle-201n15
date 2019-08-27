// we want to render the same table in the HTML but in JS

var tableEl = document.getElementById('table');
var allPets = [];

// constructor for pet
function Pet(name, type, color, age){
  this.name = name;
  this.type = type;
  this.color = color;
  this.age = age;

  allPets.push(this);
}

Pet.prototype.render = function(){
  // make a tr
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.name;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.type;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.color;
  // stick it to the DOM
  trEl.appendChild(tdEl);

  // create a td
  var tdEl = document.createElement('td');
  // fill it with name
  tdEl.textContent = this.age;
  // stick it to the DOM
  trEl.appendChild(tdEl);
}


new Pet('Fluffy', 'cat', 'white', 1);
new Pet('Tom', 'cat', 'orange', 2);
new Pet('Spot', 'dog', 'brown', 6);


// 1. create the element
// 2. give it content
// 3. append to the parent in the DOM

function renderHeader(){
// make a tr and stick it to the DOM
var trEl = document.createElement('tr');
tableEl.appendChild(trEl);

// put the NAME in the DOM
var tdEl = document.createElement('td');
tdEl.textContent = 'NAME';
trEl.appendChild(tdEl);

// put the TYPE in the DOM
tdEl = document.createElement('td');
tdEl.textContent = 'TYPE';
trEl.appendChild(tdEl);

// put the COLOR in the DOM
tdEl = document.createElement('td');
tdEl.textContent = 'COLOR';
trEl.appendChild(tdEl);

// put AGE in the DOM
tdEl = document.createElement('td');
tdEl.textContent = 'AGE';
trEl.appendChild(tdEl);
}

renderHeader();
for(var i = 0; i < allPets.length; i++){
  allPets[i].render();
}