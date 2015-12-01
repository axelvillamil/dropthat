$(window).on('load',calcHeight);
$(window).on('resize',calcHeight);

function carouselWidth() {
  var x = $( document ).height();

  $("#calculator_page").height(x);

};

function calcHeight() {
  var x = $( "#left-well" ).height();
  var y = $( "#right-well" ).height();
  var z = x + y;

  $("#calculator_page").height(z);

};
