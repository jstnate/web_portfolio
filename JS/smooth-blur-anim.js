'use strict'

const animRatio = 0.5
const animOptions = {
    root: null,
    rootMargin: '50px',
    threshold: animRatio
}

const animatedSection = document.querySelectorAll(".smooth_appear")


// if (animatedSection != null) {
//     const observerForAnim = function (revealEntries) {
//         revealEntries.forEach((entry) => {
//             if(entry.intersectionRatio > animRatio){
//                 entry.target.classList.add("blur_reveal")
//             }
//         })
//     }
    
//     const anim = new IntersectionObserver(observerForAnim, animOptions)
//     anim.observe(animatedSection)    
// }

if (animatedSection != null) {
    const animObserver = function (blurEntries) {
        blurEntries.forEach((blurEntry) => {
            blurEntry.target.classList.add('blur_reveal')
        })
        
        const animated = new IntersectionObserver(animObserver, animOptions)

        animatedSection.forEach((item) => {
            animated.observe(item)
        })
    }
}
