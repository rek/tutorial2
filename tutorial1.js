/*jslint browser: true*/
/*globals $, boxModule*/
$(function () {
  "use strict";

  $('#delete').on('click', function () {
    var node = $('#loaded').data('node');
    if (node) {
      console.log('Node exists');
      node.del();
      $('#loaded').data('node', null);

    } else {
      console.log('Node is not loaded');
    }
  });

  $('#add').on('click', function () {
    boxModule.create();
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