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
    });
    // scroll to trigger title loads
    $(window).scroll();

});

const typeVisibleTitles = () => {
    $('.typed').each((i, element) => {
        element = $(element);
        if(isScrolledIntoView(element) && hasNotBeenTyped(element)) {
            typeTitle(element);
            element.addClass('typedComplete');
        }
    });
}

const hasNotBeenTyped = (el) => {
    if(el.hasClass('typedComplete')) {
        return false;
    }
    return true;
}
