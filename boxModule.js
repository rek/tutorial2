/*jslint browser: true*/
/*globals $, jQuery*/

"use strict";

function boxModule(options) {

  var pub = {},
    dom = '',
    id = '',
    options = {
      boxName: 'main',
      widthDiv: '',
      colorDiv: ''
    },

    /**
     * Loop through the css fields given
     * and display them in the given divs
     */
    setDivValues = function (object, array) {
      $.each(array, function (key, value) {
        $('#' + value).text(object.css(key));
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
          'background-color': options.colorDiv,
          'width': options.widthDiv
        });
        // save this node to the dom
        $('#loaded').attr('box-id', e.target.id);
      });
    },

    setup = function () {
      addClickDisplay(dom);

      dom.css('width', $('#size').val());
      dom.css('background', $('#color').val());
    };

  pub.create = function (o) {
    // save the new options
    $.extend(options, o);

    // lets make an id for fun
    id = 'i' + Math.floor((Math.random() * 9999) + 1);
    // make the object
    dom = $('<div class="box" id="' + id + '">' + id + '</div>');

    // save a self refrence
    dom.data('node', this);

    // and draw it on the page
    $('#' + options.boxName).append(dom);

    // set the drawn box to our options
    setup();

    return this;
  };

  pub.del = function () {
    dom.remove();
  }

  pub.dom = function () {
    return dom;
  }

  pub.options = options;

  return pub;

};