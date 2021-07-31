  $(document).ready(function(){
    $("#designi").click(function(){
      $("#designi").slideDown('1500').hide('1500');
      $("#showp").show('1500');
    });
    $("#showp").click(function(){
      $("#showp").slideUp('1500');
      $("#designi").show('1500');
    });
  });
  $(document).ready(function(){
    $("#developmenti").click(function(){
      $("#developmenti").slideDown('1500').hide('1500');
      $("#showd").show('1500');
    });
    $("#showd").click(function(){
      $("#showd").slideUp('1500');
      $("#developmenti").show('1500');
    });
  });
  $(document).ready(function(){
    $("#producti").click(function(){
      $("#producti").slideDown('1500').hide('1500');
      $("#showpr").show('1500');
    });
    $("#showpr").click(function(){
      $("#showpr").slideUp('1500');
      $("#producti").show('1500');
    });
  });
      $(document).ready(function(){
        $('#portfolio1').mouseover(function() {
         $('#textover1').show();
       }).mouseout(function() {
         $('#textover1').hide();
   });
});
     $(document).ready(function(){
       $('#portfolio2').mouseover(function(){
         $('#textover2').show();
       }).mouseout(function(){
         $('#textover2').hide();
    });
 });

     $(document).ready(function(){
       $('#portfolio3').mouseover(function(){
         $('#textover3').show();
       }).mouseout(function(){
         $('#textover3').hide();
    });
});
      $(document).ready(function() {
        $('#portfolio4').mouseover(function(){
         $('#textover4').show();
       }).mouseout(function(){
        $('#textover4').hide();
    });
  });
        $(document).ready(function() {
          $('#portfolio5').mouseover(function() {
           $('#textover5').show();
            }).mouseout(function() {
           $('#textover5').hide();
      });
   });
        $(document).ready(function() {
          $('#portfolio6').mouseover(function() {
            $('#textover6').show();
            }).mouseout(function() {
           $('#textover6').hide();
       });
    });
      $(document).ready(function() {
        $('#portfolio7').mouseover(function(){
          $('#textover7').show();
          }).mouseout(function() {
        $('#textover7').hide();
     });
    });
      $(document).ready(function() {
        $('#portfolio8').mouseover(function() {
          $('#textover8').show();
           }).mouseout(function() {
          $('#textover8').hide();
       });
    });

  $(document).ready(function(){

  $("#myForm").submit(function(){
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("input#message").val();
    if ($("input#name").val() && $("input#email").val()){
      alert ("we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
  });

});
