//$('btn').on('click', function(){
//  $(".popup-overlay, .popup-content").addClass("active");
//});

//$(".close_btn").on("click",function(){
//  $(".popup-overlay, .popup-content").removeclass("active");
//});//

$('btn').on('click',function(){
    $('.popup-overlay, .popup-content').addClass('active').fadeIn();
    console.log("a");
});

$('#close_btn').on('click',function(){
    $('.popup-overlay, popup-content').removeClass('active').fadeOut();
});
