console.log('Index is good')
let plusBtn = document.querySelector('#plus-btn')
let counter = document.querySelector('#counter')
let minusBtn = document.querySelector('#minus-btn')
let resetBtn = document.querySelector('#reset-btn')
let themeButtons = document.querySelectorAll('.theme-buttons')
let body = document.querySelector('body')
let allButtons = document.querySelectorAll('button')

let count = 0

let increment = () => {
    count += 1
    console.log(count)
    counter.textContent = count
}

let decrement = () => {
    count -= 1
    console.log(count)
    counter.textContent = count
}

let reset = () => {
    count = 0
    console.log(count)
    counter.textContent = count
}

let selectTheme = (e) => {
    console.log(e.target.textContent)
    body.className = e.target.textContent
    allButtons.forEach((btn, index, arr) => {

        if(btn.classList.contains('facebook')) {
            btn.classList.remove('facebook')
        } else if(btn.classList.contains('devmountain')) {
            btn.classList.remove('devmountain')
        } else if(btn.classList.contains('twitter')) {
            btn.classList.remove('twitter')
        } else if(btn.classList.contains('default')) {
            btn.classList.remove('default')
        }
        // or remove the if/else and just keep the .remove in the forEach fxn
        btn.classList.add(e.target.textContent)
    })
}

plusBtn.addEventListener('click', increment)
minusBtn.addEventListener('click', decrement)
resetBtn.addEventListener('click', reset)
for(let i = 0; i < themeButtons.length; i++) {
    themeButtons[i].addEventListener('click', selectTheme)
}
