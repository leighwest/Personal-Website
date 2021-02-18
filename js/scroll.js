// jQuery onLoad function
$(function(){
    $("nav a").on("click", function (e) {
        e.preventDefault();
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top }, 600);
      });
  
    
    $(window).scroll(function() {
        
        $(document).on("scroll", function() {
            var currentScrollPos = $(document).scrollTop();
            var opacity = 1-currentScrollPos/300;
            $(".arrow-2").css(`opacity`, `${opacity}`);
            $(".arrow-1").css(`background`, `rgba(100, 91, 235, ${opacity})`);
        })
    })

    // AOS.init({
//   });
      
  
})
