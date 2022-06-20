const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-button');
function navToggle(){
     menuButton.classList.toggle('open');
     menu.classList.toggle('flex');
     menu.classList.toggle('hidden');
}
menuButton.addEventListener('click',navToggle);