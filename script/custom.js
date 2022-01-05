$('p').css({'display':'none'});
$('.show-btn').click(function(){
    $('p').css({'display':'block'});
})

$('.hide-btn').click(function(){
    $('p').css({'display':'none'});
})

// $('a').css({'text-decoration':'none', 'color':'red'});

// $('선택자').메서드(function(){}) == 기본 구문, 세미콜론은 작성안해도됨

$('.show-btn-1').click(function(){
    $('div').show()
})

$('.hide-btn-1').click(function(){
    $('div').hide()
})