'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let xo = 'o'

    const $square = document.getElementsByClassName('square')

    for (let i = 0, length = $square.length; i < length; i++) {
        $square[i].addEventListener('mousedown', (e) => {
            xo = (xo === 'o') ? 'x' : 'o'

            const elem = (e.target.tagName === 'IMG') ? e.target : e.target.children[0]

            elem.setAttribute('src', `assets/${xo}.png`)
            elem.removeAttribute('class')

            const xhr = new XMLHttpRequest()

            xhr.open('POST', encodeURI('api/php/index.php'))
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xhr.onload = () => {
                console.log(xhr.responseText)
            }
            xhr.send(encodeURI(`xo=${xo}`))
        })
    }
})