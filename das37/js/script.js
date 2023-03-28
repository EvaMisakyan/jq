"use strict"
$(document).scroll(function() {
    $('section').each(function() {
        var x = $(window).scrollTop() + $(window).height();
        var y = $(this).offset().top + $(this).height();

        if (x >= y) {
            $(this).addClass('active')
        }

    })

    // $('.sec5').on(click, "sec5-div1", function() {
    //         $('.modal1').addClass("active")
    //     })
    //  $(', .overlay').on('click',function(){
    //      $('.overlay, .sec5  .sec5-div1').removeClass("active")
    //   })

})