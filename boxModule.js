"use strict";

//define an o2 namespace if it does not exist.
if (!boxModule) {
    var boxModule = {};
}

boxModule = (function ($) {
    var boxName = 'main';
    var public = {};

    changeSize = function (b) {
        return b.css('width', $('#size').val());
    }

    changeColor = function (b) {
        return b.css('background', $('#color').val());
    }

    addClickDisplay = function (d) {
        d.click(function (e) {
            $('#size_color').text($(e.target).css('background-color'));
        });
    }

    public.showBox = function () {
        newDiv = $('<div class="box"></div>');
        changeSize(newDiv).changeColor();
        ;
        $('#' + boxName).append(newDiv);
        addClickDisplay(newDiv);
    }

    public.changeDiv = function (newName) {
        boxName = newName;
    }

    return public;

}(jQuery));