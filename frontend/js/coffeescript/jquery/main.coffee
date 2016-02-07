'use strict'

$ ->
    xo = 'o'

    $('.square').on 'mousedown', ->
        xo = if (xo == 'o') then 'x' else 'o'

        $(this)
        .children()
        .removeClass('hidden')
        .attr('src', "assets/#{xo}.png")

        $.ajax({
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            method: 'POST',
            url: '<%=server[back]%>',

            data: JSON.stringify({
                xo
            }),

            complete: (data) -> console.log(data.responseText)
        })