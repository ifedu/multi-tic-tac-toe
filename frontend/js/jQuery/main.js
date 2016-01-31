'use strict'

$(() => {
    let xo = 'o'

    $('.square').on('mousedown', function () {
        xo = (xo === 'o') ? 'x' : 'o'

        $(this)
        .children()
        .removeClass('hidden')
        .attr('src', `assets/${xo}.png`)

        const request = {
            xo
        }

        $.ajax('api/php/index.php', {
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