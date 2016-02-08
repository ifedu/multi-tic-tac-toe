// <reference path='polymer-ts.d.ts' />

(() => {
'use strict'

let xo = 'o'

Polymer({
    is: 'mttt-square'

    properties: {
        classHidden: {
            value: 'hidden'
        }

        png: {
            value: 'assets/x.png'
        }

        xo: {
            value: 'o'
        }
    }

    click: function(e) {
        xo = (xo === 'o') ? 'x' : 'o'

        this.classHidden = ''
        this.png = `assets/<%=$%>{xo}.png`
        this.xo = xo

        const xhr = new XMLHttpRequest()

        xhr.open('POST', encodeURI('<%=server[back]%>'), true)
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = () => console.log(xhr.responseText)
        xhr.send(JSON.stringify({
            xo
        }))
    }
})
})()