'use strict'

const animRatio = 0.3
const animOptions = {
    root: null,
    rootMargin: '50px',
    threshold: animRatio
}

const animatedSection = document.querySelectorAll('.smooth_appear').forEach((item) => {
    if (item != null) {
        const animObserver = function (revealEntries_1, reveal_1) {
            revealEntries_1.forEach(function(entry_1) {
                if(entry_1.intersectionRatio > animRatio){
                    reveal_1.unobserve(entry_1.target)
                    entry_1.target.classList.add("blur_reveal")
                }
            });
        }
        
        const animated = new IntersectionObserver(animObserver, animOptions)
        animated.observe(item)
    }
    
})

