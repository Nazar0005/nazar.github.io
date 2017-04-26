'use strict';

// document.addEventListener("DOMContentLoaded", namFunction); вызов функцию после загрузки DOM


document.getElementById('header-menu__gamburger').addEventListener('click', myFunction)

// Открыть закрыть навигацию в header
function myFunction() {
    this.classList.toggle("change");
    var headerMenu = document.getElementById('header-menu');
    
    if (headerMenu.style.maxHeight) {
        headerMenu.style.maxHeight = null;
    } else {
        headerMenu.style.maxHeight = headerMenu.scrollHeight + 'px';
    }
}





