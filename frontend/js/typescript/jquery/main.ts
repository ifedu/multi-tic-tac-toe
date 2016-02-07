// <reference path='jquery.d.ts' />

'use strict'

$(() => {
    let xo = 'o'

    $('.square').on('mousedown', function () {
        xo = (xo === 'o') ? 'x' : 'o'

        $(this)
        .children()
        .removeClass('hidden')
        .attr('src', `assets/<%=$%>{xo}.png`)

        $.ajax({
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            method: 'POST',
            url: '<%=server[back]%>',

            data: JSON.stringify({
                xo
            }),

            complete: (data) => console.log(data.responseText)
        })
    })
})