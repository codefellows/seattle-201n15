'use strict';

// gets the form DOM element
var addLocationForm = document.getElementById('addLocation');

// gets the table element
var table = document.getElementById('table');

//holds the instances of the objects entered in the constructor function
var storesAll = [];

var timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//constructor funciton
function Locations (name, min, max, averageCookieSale) {
  this.name = name;
  this.minCustomers = min;
  this.maxCustomers = max;
  this.averageCookieSale = averageCookieSale;
  this.randomCustomerArray = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  storesAll.push(this);
}

//prototypes

// generates our randomCustomerArray
Locations.prototype.calcCustomersPerHour = function() {
  for (var i = 0; i < timeArray.length; i++) {  
    var randomNumberOfCustomers = randomNumber(
      this.minCustomers,
      this.maxCustomers
    );
    this.randomCustomerArray.push(randomNumberOfCustomers);
  }
};

// generating our cookiesPerHour array
// calculating our total cookies for the day for the location
Locations.prototype.calcCookiesPerHour = function() {
  for (var i=0; i < timeArray.length; i++) {
    var cookiesSold = Math.floor(this.randomCustomerArray[i] * this.averageCookieSale);
    this.cookiesPerHour.push(cookiesSold);
    this.totalCookies = this.totalCookies + cookiesSold;
  }
};

// call the methods that generate our arrays.
Locations.prototype.render = function() {
  this.calcCustomersPerHour();
  this.calcCookiesPerHour();
  
  // create a tr
  var trEl = addElement('tr', false, table);


  // need the name
  addElement('td', this.name, trEl);


  // need cookies sold each hour
  for(var i = 0; i < timeArray.length; i++){
    addElement('td', this.cookiesPerHour[i], trEl);

  }

  // need total for location
  addElement('td', this.totalCookies, trEl);

};

//object instances
new Locations ('1st and Pike', 23, 65, 6.3);
new Locations ('SeaTac Airport', 3, 24, 1.2);
new Locations ('Seattle Center', 11, 38, 3.7);
new Locations ('Capitol Hill', 20, 38, 2.3);
new Locations ('Alki', 2, 16, 4.6);

//functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//top row
function renderHeader(){
  console.log('I am running!!!!')
  // need a table row
  var trEl = addElement('tr', false, table);

  // need an empty cell
  addElement('td', '', trEl);

  // need a loop over the time
  for(var i = 0; i < timeArray.length; i++){
    addElement('td', timeArray[i], trEl);
  }
}


function renderTable (){
  //clears all values from the table
  document.getElementsByTagName('tbody')[0].innerHTML = '';

  renderHeader();
  //renders each location
  for (var i = 0; i < storesAll.length; i++) {
    storesAll[i].render();
  }
  renderFooter();
}

function renderFooter (){
  // make and add a row to the table
  var trEl = addElement('tr', false, table);

  // create the first cell with the text content: 'Total Each Hour'
  addElement('td', 'Total Each Hour', trEl);

  var totalOfAllTotals = 0;
  // loop through the array of the hours
  for(var i = 0; i < timeArray.length; i++){
    var hourlyTotal = 0;
    for(var j = 0; j < storesAll.length; j++){
      hourlyTotal += storesAll[j].cookiesPerHour[i];
    }
    totalOfAllTotals += hourlyTotal;
    addElement('td', hourlyTotal, trEl);
  }

  addElement('td', totalOfAllTotals, trEl);

}

// MAGIC FUNCTION////////////////////////////////////
// when I call this, my element needs to be a string
function addElement(element, content, parent){
  var newElement = document.createElement(element);
  if(content){
    var newContent = document.createTextNode(content);
    newElement.appendChild(newContent);
  }

  parent.appendChild(newElement);
  return newElement;
}

function addLocation (event){
  event.preventDefault();

  var name = event.target.name.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var averageCookieSale = event.target.averageCookieSale.value;

  new Locations(name, min, max, averageCookieSale);
  renderTable();
}

// event listener
addLocationForm.addEventListener('submit', addLocation);

renderTable();
