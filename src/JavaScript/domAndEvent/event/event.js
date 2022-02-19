const log = console.log

const birds = document.querySelector(".birds")


// Bubble
birds.addEventListener("click", e => {
    log(e)
    log(`이벤트 단계: ${e.eventPhase}`)
    log(`이벤트 타깃: ${e.target}`)
    log(`Current 단계: ${e.currentTarget}`)
})


// Capture
birds.addEventListener("click", e => {
    log(e)
    log(`이벤트 단계: ${e.eventPhase}`)
    log(`이벤트 타깃: ${e.target}`)
    log(`Current 단계: ${e.currentTarget}`)
}, true)

// const birdsList = document.querySelectorAll("li")

// for (const iter of [...birdsList]) {
//     iter.addEventListener("click", (e) => {
//         if ([...e.target.classList].includes("active")) {
//             e.target.classList.remove("active")
//         } else {
//             e.target.classList.toggle('active', iter === e.target)
//         }
//     })
// }
