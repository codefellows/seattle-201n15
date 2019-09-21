'use strict';

// this renders each cat to the the first page if it is in local storage
// we need to re-instantiate the cat objects so they have access to the methods on the constructor function
if (localStorage.cats) {
  var catsFromLS = JSON.parse(localStorage.cats);
  // catsFromLS is now an array of generic objects
  for (var i = 0; i < catsFromLS.length; i++) {
    new Cat(catsFromLS[i].name);
    allCats[i].render();
  }
}

catform.addEventListener('submit', handleCatSubmit);