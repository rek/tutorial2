/*jslint browser: true*/
/*globals $, jQuery*/

"use strict";
var boxModule = (function ($) {
  var _this, _dom, _options = {
    boxName: 'main',
    widthDiv: '',
    colorDiv: ''
  },
    pub = {},

    /**
    * Loop through the css fields given
    * and display them in the given divs
    */
    setDivValues = function (obj, vals) {
      $.each(vals, function (key, value) {
        $('#' + value).text(obj.css(key));
      });
    },

    /**
     * When the box is clicked, update the display
     * and save the this object to the dom element
     *
     */
    addClickDisplay = function (d) {
      d.click(function (e) {
        // display the values when clicked
        setDivValues($(e.target), {
          'background-color': _options.colorDiv,
          'width': _options.widthDiv
        });
        // save this node to the dom
        $('#loaded').data('node', _this);
      });
    },

    setup = function () {
      addClickDisplay(_dom);
      _dom.css('width', $('#size').val());
      _dom.css('background', $('#color').val());

      return _this;
    };

  pub.create = function (options) {
    // make the object
    _dom = $('<div class="box"></div>');
    // save a self refrence of ourselves
    _this = this;
    // save the new options
    pub.options(options);
    // and draw it on the page
    $('#' + _options.boxName).append(_dom);

    // set the drawn box to our options
    return setup();
  };

  pub.options = function (options) {
    $.extend(_options, options);
  };

  pub.del = function () {
    _dom.remove();
  };

  return pub;

}(jQuery));