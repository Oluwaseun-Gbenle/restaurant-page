$(document).ready(function(){
    $("#btnlink, #menu-btn").click(function(){
      $("#menu").addClass("enabled");
    
    });

    $("#about-btn").click(function(){
      $("#about").addClass("enabled");
    });

    $("#interior-btn").click(function(){
      $("#interior").addClass("enabled");
    });

    $("#contact-btn").click(function(){
      $("#contact").addClass("enabled");
    });

  });