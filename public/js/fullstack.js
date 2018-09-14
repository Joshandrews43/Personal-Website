const isScrolledIntoView = (el) => {
    var rect = el[0].getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

const typeTitle = (val) => {
    var text = val.text();
    var autoTypeOptions = {
      strings: [text],
      typeSpeed: 50,
      showCursor: false
    }
    val.text('');
    var typed = new Typed('#' + val[0].id, autoTypeOptions);
}

$(document).ready(function() {

    $(window).scroll(() => {
        typeVisibleTitles();
        const calc = $('#calculator-screenshot');
        if(isScrolledIntoView(calc) && hasNotBeenAnimated(calc)) {
            calc.attr('src', '/static/assets/calculator.gif');
            calc.addClass('animationComplete')
            setTimeout(() => {
                calc.css({'transform': 'rotate(-180deg)'});
            }, 8000)
        }
    });
    // scroll to trigger title loads
    $(window).scroll();

});

const typeVisibleTitles = () => {
    $('.typed').each((i, element) => {
        element = $(element);
        if(isScrolledIntoView(element) && hasNotBeenAnimated(element)) {
            typeTitle(element);
            element.addClass('animationComplete');
        }
    });
}

const hasNotBeenAnimated= (el) => {
    if(el.hasClass('animationComplete')) {
        return false;
    }
    return true;
}
