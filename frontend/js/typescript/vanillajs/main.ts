interface HTMLElementEvent<target extends HTMLElement> extends Event {
    target
}

'use strict'

document.addEventListener('DOMContentLoaded', () => {
    let xo = 'o'

    const $square = document.getElementsByClassName('square')

    for (let i = 0, length = $square.length; i < length; i++) {
        $square[i].addEventListener('mousedown', (e: HTMLElementEvent<HTMLInputElement>) => {
            xo = (xo === 'o') ? 'x' : 'o'

            const target = e.target
            const elem = e.target.tagName === 'IMG' ? e.target : (<HTMLElement>e.target).children[0]

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