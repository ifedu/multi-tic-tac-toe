'use strict'

document.addEventListener 'DOMContentLoaded', ->
    xo = 'o'

    $squares = document.getElementsByClassName('square')

    for $square in $squares
        $square.addEventListener 'mousedown', (e) ->
            xo = if (xo == 'o') then 'x' else 'o'

            elem = if (e.target.tagName == 'IMG') then e.target else e.target.children[0]

            elem.setAttribute('src', "assets/#{xo}.png")
            elem.removeAttribute('class')

            xhr = new XMLHttpRequest()

            xhr.open('POST', encodeURI('<%=server[back]%>'))
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            xhr.onload = ->
                console.log(xhr.responseText)

            xhr.send(encodeURI("xo=#{xo}"))