$(".open_btn").on('click', function(){
  $(".popup-overlay, .popup-content").addClass("active");
});

$(".close_btn").on("click",function(){
  $(".popup-overlay, .popup-content").removeclass("active");
});
