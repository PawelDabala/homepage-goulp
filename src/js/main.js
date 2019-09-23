"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

console.log('Witaj na mojej stronie');

const daytext = document.querySelector('.diary__daytext--js')
// console.log(daytext)
daytext.innerHTML = 'Hello! This is a generator for text fonts of the "cool" variety.'
// console.log(daytext)

const first_name = 'Pawel'
const last_name = 'Dabala'

const show_name = (first_name, last_name) => console.log(`Witaj ${first_name} ${last_name}.`)

show_name(first_name, last_name)


const navigationSwitcher = document.querySelector('.navigation__sitcher--js');

navigationSwitcher.addEventListener('click', (e) => {
  const navigationList = document.querySelector('.navigation__list--js');
  navigationList.classList.toggle('navigation__list--visible');
  if (navigationSwitcher.innerHTML != 'X') {
    navigationSwitcher.innerHTML = 'X';
  } else {
    navigationSwitcher.innerHTML = '&#9776;';
  }

})



