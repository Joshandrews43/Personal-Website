//main.js
var options = {
  strings: ["Welcome to my site.", "Got Milk?"],
  typeSpeed: 10,
  backSpeed: 10,
  //backDelay: 1000,
  onComplete: (self) => {
        $('#autoType').delay(100).fadeOut(100, () => {
            $('body > .overlay').hide();
            $('#intro-screen').fadeIn(100);
            $('#intro-screen').css('display', 'flex');
        })
  }
}

$(document).ready(function() {
    var typed = new Typed('#autoType', options);
});
