//$('btn').on('click', function(){
//  $(".popup-overlay, .popup-content").addClass("active");
//});

//$(".close_btn").on("click",function(){
//  $(".popup-overlay, .popup-content").removeclass("active");
//});//

$(document).on('click','.open_btn',function(){
    $('.popup-overlay').addClass('active').fadeIn();
});

$('#close_btn').on('click',function(){
    $('.popup-overlay, popup-content').removeClass('active').fadeOut();
});
