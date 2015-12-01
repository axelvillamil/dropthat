$(window).on('load',carouselWidth);
$(window).on('resize',carouselWidth);

function carouselWidth() {
  var x = $( window ).height();
  var new_height = x/2;

  $("#icon_set").height(new_height);

  console.log(new_height)
};
