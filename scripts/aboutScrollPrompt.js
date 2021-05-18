$(window).scroll(function() {
    if ($(this).scrollTop() > 1) { //use `this`, not `document`
        $('.scroll-prompt-arrow-container').css({
            'display': 'none'
        });
    }
});
