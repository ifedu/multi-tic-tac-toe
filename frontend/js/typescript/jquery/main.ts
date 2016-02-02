/// <reference path='../_dts/jquery.d.ts' />

'use strict'

$(() => {
    let xo = 'o'

    $('.square').on('mousedown', function () {
        xo = (xo === 'o') ? 'x' : 'o'

        $(this)
        .children()
        .removeClass('hidden')
        .attr('src', `assets/<%=$%>{xo}.png`)

        const request = {
            xo
        }

        $.ajax('<%=server[back]%>', {
            method: 'POST',

            data: {
                xo
            }
        })
        .then(function success(data) {
            console.log(data)
        })
    })
})