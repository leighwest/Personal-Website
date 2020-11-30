// jQuery onLoad function
$(function(){
    $("nav a").on("click", function (e) {
        e.preventDefault();
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top }, 600);
      });
  
    
    $(window).scroll(function() {
        
        console.log($(document).scrollTop());

        $(document).on("scroll", function() {
            var currentScrollPos = $(document).scrollTop();
            $(".arrow-2").css("opacity", 1-currentScrollPos/400);
            var opacity = 1-currentScrollPos/400;
            // not sure how to target pulsing circle 
            console.log(opacity);
            $(".arrow-1").css(`background`, `rgba(100, 91, 235, ${opacity})`);
        })
    })
      
  
})
