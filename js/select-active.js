function selectActiveMenuItem() {
    $('nav').removeAttr("style");
    let activeFound = false;
    $('#nav').children().each((i, element) => {
    if ($(element).children('a').length > 0) {
        let a = $(element).children().first();
        if (window.location.href.includes(a.attr('href'))) {
        a.addClass('active');
        activeFound = true;
        } else {
        a.removeClass('active');
        }
    }
    });
    if (!activeFound) {
    $('#nav').children().first().children('a').first().addClass('active');
    }
}