$(function () {
    "use strict";

    $('#add').on('click', function () {
        var myBox = boxModule.showBox();
    });

    $('#size').keypress(function (e) {
        if (e.which === 13) {
            $('#color').focus();
        }
    });

    $('#color').keypress(function (e) {
        if (e.which === 13) {
            $('#add').click();
            $(this).val('');
            $('#size').val('');
            $('#size').focus();
        }
    });

    $('#size').focus();
});