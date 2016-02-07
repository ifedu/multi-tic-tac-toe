'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let xo = 'o'

    const $squares = document.getElementsByClassName('square')

    for (let i = 0, length = $squares.length; i < length; i++) {
        $squares[i].addEventListener('mousedown', (e) => {
            xo = (xo === 'o') ? 'x' : 'o'

            const elem = (e.target.tagName === 'IMG') ? e.target : e.target.children[0]

            elem.setAttribute('src', `assets/<%=$%>{xo}.png`)
            elem.removeAttribute('class')

            const xhr = new XMLHttpRequest()

            xhr.open('POST', encodeURI('<%=server[back]%>'), true)
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.onload = () => console.log(xhr.responseText)
            xhr.send(JSON.stringify({
                xo
            }))
        })
    }
})