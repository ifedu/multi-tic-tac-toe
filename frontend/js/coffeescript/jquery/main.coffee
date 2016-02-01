'use strict'

$ ->
    xo = 'o'

    $('.square').on 'mousedown', ->
        xo = if (xo == 'o') then 'x' else 'o'

        $(this)
        .children()
        .removeClass('hidden')
        .attr('src', "assets/#{xo}.png")

        request =
            xo: xo

        $.ajax('api/php/index.php', {
            method: 'POST',

            data: {
                xo
            }
        })
        .then((data) ->
            console.log(data)
        )