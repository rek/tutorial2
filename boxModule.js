/*jslint browser: true*/
/*globals $, jQuery*/

"use strict";
var boxModule = (function ($) {
  var _this, _dom, _boxName = 'main',
    pub = {},

    changeSize = function (b) {
      b.css('width', $('#size').val());
    },

    changeColor = function (b) {
      b.css('background', $('#color').val());
    },

    /**
     * When the box is clicked, update the display and
     * save the this object to the dom element
     *
     */
    addClickDisplay = function (d) {
      d.click(function (e) {
        $('#size_color').text($(e.target).css('background-color'));
        $('#loaded').data('node', _this);
      });
    },

    setup = function () {
      changeSize(_dom);
      changeColor(_dom);
      addClickDisplay(_dom);
      return this;
    };

  pub.create = function () {
    _dom = $('<div class="box"></div>');
    _this = this;
    $('#' + _boxName).append(_dom);

    return setup();
  };

  pub.changeDiv = function (newName) {
    _boxName = newName;
  };

  pub.del = function () {
    _dom.remove();
  };

  return pub;

}(jQuery));