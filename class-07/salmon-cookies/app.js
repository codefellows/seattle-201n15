'use strict';

// an array to hold the hours
var hours = ['6am', '7am', '8am', '9am'];

// variable to hold the ul in the DOM
var salesEl = document.getElementById('sales');

// object literal for each location
var pike = {
  name: 'first and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,

  cookiesSoldEachHourArr: [],
  customersPerHourArr: [],
  totalPerDay: 0,

  calcCustomersEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      var customersEachHour = generateRandom(this.minCustomers, this.maxCustomers);

      this.customersPerHourArr.push(customersEachHour);

    }
  },

  calcCookiesSoldEachHour: function(){
    // we have an array of customers each hour
    // we have average cookies sold per customer
    // we want an array of the customers times the average cookies
    for(var i = 0; i < hours.length; i++){
      var oneHourOfSales = Math.floor(this.customersPerHourArr[i] * this.avgCookiesPerCustomer);

      console.log('this is One Hour Of Sales', oneHourOfSales);

      this.cookiesSoldEachHourArr.push(oneHourOfSales);
      this.totalPerDay += oneHourOfSales;
    }
  },

  render: function(){
    // MUST generate customers each hour BEFORE generating cookies each hour
    this.calcCustomersEachHour();
    this.calcCookiesSoldEachHour();

    // 1. create an element
    var liEl = document.createElement('li');
    // 2. give it content
    liEl.textContent = this.name;
    // 3. append it to the DOM
    salesEl.appendChild(liEl);

    for(var i = 0; i<hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArr[i]} cookies`;
      salesEl.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = this.totalPerDay;
    salesEl.appendChild(liEl);
  }
}

pike.render();
  // method: calculates the cookies sold each hour
  // method: rending it to the DOM
function generateRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
