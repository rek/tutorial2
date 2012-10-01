/*jslint browser: true*/
/*globals $, boxModule*/
$(function () {
  "use strict";

  var cDiv = 'option_color',
    wDiv = 'option_width';


  function resetForm() {
    $('#color').val('');
    $('#size').val('');
    $('#size').focus();
  }

  function resetSidebar() {
    $('#' + wDiv).text('');
    $('#' + cDiv).text('');
  }

  function nodeAction(done, fail) {
    var node = $('#' + $('#loaded').attr('box-id')).data('node');
    if (node) {
      done(node);
    } else {
      fail();
    }
  }

  /**
   * When the add button is pressed
   * clear the form fields and reset focus
   * then create the box, setting some options
   */
  $('#add').on('click', function () {
    var newBox = boxModule().create({
      'colorDiv': cDiv,
      'widthDiv': wDiv
    });

    resetForm();
  });

  /**
   * When delete is pressed
   * get the node from the dom element
   * and delete it where ever it is
   */
  $('#delete').on('click', function () {
    nodeAction(function (node) {
      console.log('Deleting');
      node.del();
      $('#loaded').removeData('node');
      resetSidebar();
    }, function () {
      $(this).effect("shake", {
        times: 2
      }, 100);
      console.log('Node is not loaded');
    });
  });

  $('#shrink').on('click', function () {
    nodeAction(function (node) {
      node.dom().animate({
        width: "20px"
      }, "slow", "swing");
      node.dom().animate({
        height: "20px"
      }, "slow", "swing");
    });
  });

  $('#drop').on('click', function () {
    nodeAction(function (node) {
      node.dom().animate({
        top: "200px"
      }, "slow", "swing");
    });
  });

  /**
   * When enter is pressed in the size field
   * move the focus to the focus field
   */
  $('#size').keypress(function (e) {
    if (e.which === 13) {
      $('#color').focus();
    }
  });

  /**
   * When enter is pressed in the color box
   * then simulate a click on the add button
   */
  $('#color').keypress(function (e) {
    if (e.which === 13) {
      $('#add').click();
    }
  });

  // on page load, focus the size field
  $('#size').focus();
});