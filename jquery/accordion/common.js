$(function() {
  $("#accordion dd:gt(0)").hide();
  $("#accordion dt").on("click",function(){
    if($("+dd",this).css("display")=="none") {
      $("#accordion dd").slideUp();
      $(this).next("dd").slideToggle();
    }
  });
});