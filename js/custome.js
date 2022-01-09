$(document).ready(function(){
    $('#banner').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        dots:false,
        navText: ["<i class='las la-chevron-circle-left'></i>","<i class='las la-chevron-circle-right'></i>"],
        nav:true,
        items:1
    });
    $('.product-slider').owlCarousel({
        loop:true,
        margin:5,
        nav:false,
        dots:true,
        navText: ["<i class='las la-chevron-circle-left'></i>","<i class='las la-chevron-circle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });

    $('#latestoffers').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        navText: ["<i class='las la-chevron-circle-left'></i>","<i class='las la-chevron-circle-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $(".menu-toogle-btn").click(function () {
        $(".main-menu-sec").addClass("left-0");
      $("header").prepend("<div class='menu-overlay'></div>"); 
    });
    $(document).on("click",".menu-overlay, .submneu a",function() {
        $(".main-menu-sec").removeClass("left-0");
        $(".menu-overlay").remove();
    });

     
    $(document).on("click",".menu-overlay, .main-menu a",function() {
        $(".main-menu").removeClass("right-0");
        $(".menu-overlay").remove();
        $(".nav-toogle").attr("style","")
    });
  });