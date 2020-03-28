$(function() {
  $("#accordion dd:gt(0)").hide();
  $("#accordion dt").on("click"),function(){
    $("#accordion dd").slideUp();
  };
  $("#accordion dt").on("click",function(){
    $("#accordion dd").slideUp();
    $(this).next("dd").slideToggle();
  });
});