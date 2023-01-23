'use strict';

window.onload = () => {
    document.title = 'Nathan LEFETEY - Portfolio'
}

window.onfocus = () => {
    document.title = 'Nathan LEFETEY - Portfolio'
}

window.onblur = () => {
    document.title = 'Revenez vite !'
}
// BURGER MENU SCRIPT
let btn = document.querySelector('.burger_btn')
let menu = document.querySelector('.nav_link')
let link = document.querySelector('.nav_link')

if (btn != null) {

    // LISTENER LOOPING
    function toggleMenu() {
        if (btn.classList.contains('active')) { // SHOW THE MENU
            btn.classList.remove('active')
            menu.classList.remove('active')
        } else { // HIDE THE MENU
            btn.classList.add('active')
            menu.classList.add('active')
        }
    }

    // LISTENING THE BUTTON
    btn.addEventListener('click', toggleMenu)
}

if (link != null) {
    // HIDE THE MENU ON LINK CLICK
    link.addEventListener('click', function() {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active')
            menu.classList.remove('active')
        }
    })
}

// =====================================================================

//  TEXT HEADER ANIM SCRIPT (Library)
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');

    if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
    }

    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.12em solid #222627 }";
    document.body.appendChild(css);
};

// =====================================================================

// PROJECT CARD ANIM SCRIPT
const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
    // LISTENING EACH CARD
    card.addEventListener("click", () => {
        cards.forEach((card) => {
            card.classList.remove("active") // HIDE TARGET CARD
        })
        card.classList.add('active') // SHOW TARGET CARD
    })
})

// =====================================================================

// SMOOTH BLUR ANIM SCRIPT
const animRatio = 0.3 // RATION OF SECTION WHEN INTERSECTION OBSERVER TURN ON 
const animOptions = { // OPTIONS OF THE INTERSECTION OBSERVER
    root: null,
    rootMargin: '50px',
    threshold: animRatio // VISIBILITY THRESHOLD
}

const animatedSection = document.querySelectorAll('.smooth_appear').forEach((item) => { // FOR EACH ITEM WITH "smooth_appear" CLASS
    if (item != null) {
        const animObserver = (revealEntries_1, reveal_1) => {
            revealEntries_1.forEach((entry_1) => {
                if(entry_1.intersectionRatio > animRatio){ // IF ITEM TOUCH THRESHOLD OF VISIBILITY
                    reveal_1.unobserve(entry_1.target)
                    entry_1.target.classList.add("blur_reveal")
                }
            });
        }
        const animated = new IntersectionObserver(animObserver, animOptions)
        animated.observe(item)
    }
})