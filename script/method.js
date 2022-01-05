$('.show-btn').click(function(){
    $('.container div').fadeIn(500)
})
$('.hide-btn').click(function(){
    $('.container div').fadeOut(10000)
})
$('.toggle-btn').click(function(){
    $('.container div').fadeToggle()
})