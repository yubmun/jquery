$('.menu li').mouseenter(function(){
    $(this).children('.sub-menu').stop().slideDown()
}) /// this 는 .menu li 

$('.menu li').mouseleave(function(){
    $(this).children('.sub-menu').stop().slideUp()
})