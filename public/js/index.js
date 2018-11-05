//main.js
var options = {
  strings: ["Welcome to my site.", "..."],
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 750,
  onComplete: (self) => {
        $('#autoType').delay(100).fadeOut(100, () => {
            $('body > .overlay').hide();
            $('#intro-screen').fadeIn(100);
            $('#intro-screen').css('display', 'flex');
        })
  }
}

$(document).ready(function() {
    console.log(window.location.pathname)
    if(window.location.pathname === "/home") {
        $('#intro-screen').fadeIn(100);
        $('#intro-screen').css('display', 'flex');
    } else {
        var typed = new Typed('#autoType', options);
    }
});
