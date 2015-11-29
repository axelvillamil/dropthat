$(window).load(carouselWidth);
$(window).on('resize',carouselWidth);


function carouselWidth() {
  var x = $( window ).height();
  var new_height = x/2;
  // var y = $(".grid-img").width();

  $("#icon_set").height(new_height);
  // $(".effect-bubba").width(y);
  console.log(new_height)
};
