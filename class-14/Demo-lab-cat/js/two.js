'use strict';

var catbutton = document.getElementById('catbutton');

// when a user clicks on the button, we go into local storage, get the cats, parse them, and reinstantiate them so that we can render each cat to the page.
function handleCatbuttonClick(){
  var catsFromLS = JSON.parse(localStorage.cats);
  console.log('allCats array after retrieving from local storage', allCats);
  for (var i = 0; i < catsFromLS.length; i++){
    new Cat(catsFromLS[i].name);
    allCats[i].render();
  }
}

catbutton.addEventListener('click', handleCatbuttonClick)