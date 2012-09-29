//define an o2 namespace if it does not exist.
if(!boxModule){var boxModule = {};}

boxModule = (function($) {
  div = 'main';
  var me = {};

  me.show = function() {

 	$('#'+div).append('<div class="box"></div>');
  }

  return me;
}(jQuery));