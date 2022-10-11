'use strict';

let btn = document.querySelector('.burger-btn')
let menu = document.querySelector('.nav_link')

if (btn != null) {
    function toggleMenu() {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active')
            menu.classList.remove('active')
        } else {
            btn.classList.add('active')
            menu.classList.add('active')
        }
    }

    btn.addEventListener('click', toggleMenu)
}