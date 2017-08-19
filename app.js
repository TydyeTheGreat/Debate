// Tyler's Website
// Variables

$(document).ready(function(){
   console.log("ready"); 
});

$(".header ul .textLinks li").on("mouseenter", function(){
    console.log("hovering")
    }).mouseleave(function(){
    console.log("left");
    $(".header ul .textLinks li").click(function(){
       console.log("clicked"); 
    });
});

