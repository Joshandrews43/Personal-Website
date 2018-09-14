//animations.js






$(window).scroll(function(event) {
  $(".module").each(function(i, el) {
    var el = $(el);
    if (isScrolledIntoView(el)) {
      	el.animate({opacity: 1}, 900);
    }
  });
});
