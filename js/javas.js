$(document).ready(function() {
  $("#design").click(function(){
    $(".showp").toggle();
     $("#design image").toggle();
 });
 $(document).ready(function() {
   $("#development").click(function(){
     $("#showpr").toggle();
      $("#product_icon").toggle();
  });
  $(document).ready(function() {
    $("#productm").click(function(){
      $("#showpr").toggle();
       $("#product_icon").toggle();
     });
      $('#work1').mouseover(function() {
        $('overlay').show();
      }).mouseout(function() {
        $('.overlay1').hide();
      });
      $('#work2').mouseover(function() {
        $('.overlay2').show();
      }).mouseout(function() {
        $('.overlay2').hide();
      });
      $('#work3').mouseover(function() {
        $('.overlay3').show();
      }).mouseout(function() {
        $('.overlay3').hide();
      });
      $('#work4').mouseover(function() {
        $('.overlay4').show();
      }).mouseout(function() {
        $('.overlay4').hide();
      });
      $('#work5').mouseover(function() {
        $('.overlay5').show();
      }).mouseout(function() {
        $('.overlay5').hide();
      });
      $('#work6').mouseover(function() {
        $('.overlay6').show();
      }).mouseout(function() {
        $('.overlay6').hide();
      });
      $('#work7').mouseover(function() {
        $('.overlay7').show();
      }).mouseout(function() {
        $('.overlay7').hide();
      });$('#work8').mouseover(function() {
        $('.overlay8').show();
      }).mouseout(function() {
        $('.overlay8').hide();
      });
     $(document).ready(function(){
       $("form#myForm").submit(function(event){
         var name = $("input#name").val();
         var email = $("input#email").val();
         var message = $("input#message").val();

         if ($("input#name").val() && $("input#email").val() && $("input#message").val()){
          alert ("Dear"+ name + " thank you for your message.we will be sure to get back to you");
        }
        else {
          alert("Dear"+ name + "please fill all fields!" );
        }

      });

    });
