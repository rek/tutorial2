/*jslint browser: true*/
/*globals $, boxModule*/
$(function () {
  "use strict";

  var cDiv = 'option_color',
    wDiv = 'option_width';

  /**
   * When delete is pressed
   * get the node from the dom element
   * and delete it where ever it is
   */
  $('#delete').on('click', function () {
    var node = $('#loaded').data('node');
    if (node) {
      console.log('Node exists');
      node.del();
      $('#loaded').data('node', null);
      resetSidebar();
    } else {
      console.log('Node is not loaded');
    }
  });

  /**
   * When the add button is pressed
   * clear the form fields and reset focus
   * then create the box, setting some options
   */
  $('#add').on('click', function () {
    resetForm();

    boxModule.create({
      'colorDiv': cDiv,
      'widthDiv': wDiv
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

  function resetForm() {
    $('#color').val('');
    $('#size').val('');
    $('#size').focus();
  }

  function resetSidebar(){
    $('#'+wDiv).text('');
    $('#'+cDiv).text('');
  }

  // on page load, focus the size field
  $('#size').focus();
});