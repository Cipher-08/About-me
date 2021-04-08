// const button = document.querySelector('.button')
// const image = document.querySelector('.image')
// const body = document.querySelector('body')



// button.addEventListener("click", () => {
//     image.style.display = 'block'
//     body.style.background = 'black'
//     console.log("hi")
// })
const aboutMyself = document.querySelector('.button-myself')
const projects = document.querySelector('.button-projects')
const interest = document.querySelector('.button-interest')
const index = document.querySelector('.about-pages-3')
const me = document.querySelector('.about-pages-1')



aboutMyself.addEventListener('click', () => {
    me.style.display = 'flex'
})
interest.addEventListener('click', () => {
    index.style.display = 'flex'
})
