'use strict';

$(function () {
    var xo = 'o';

    $('.square').on('mousedown', function () {
        xo = xo === 'o' ? 'x' : 'o';

        $(this).children().removeClass('hidden').attr('src', '../../../../design/assets/' + xo + '.png');

        var request = {
            xo: xo
        };

        $.post('../../../../backend/php/index.php', request, function (data) {
            console.log(data);
        });
    });
});