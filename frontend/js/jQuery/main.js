'use strict'

$(() => {
    let xo = 'o'

    $('.square').on('mousedown', function () {
        xo = (xo === 'o') ? 'x' : 'o'

        $(this)
        .children()
        .removeClass('hidden')
        .attr('src', `../../../../design/assets/${xo}.png`)

        const request = {
            xo
        }

        $.post('../../../../backend/php/index.php', request, ((data) => {
            console.log(data)
        }))
    })
})