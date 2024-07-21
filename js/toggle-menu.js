function toggleMenu() {
    var x = document.getElementById("nav");
    var body = document.body;
    if (x.className === "main topnav") {
        x.className += " responsive";
        body.className += " menu-open";
    } else {
        x.className = "main topnav";
        body.className = body.className.replace(" menu-open", "");
    }
    $('#nav').children().each((i, element) => {
        if ($(element).children('a').length > 0) {
            let a = $(element).children().first();
            if (window.location.href.includes(a.attr('href'))) {
                a.addClass('active');
            } else {
                a.removeClass('active');
            }
        }
    });
}