$(document).ready(function(){
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

var count = $('.count');
var loader = $('#loader');
$({ Counter: 0 }).animate({ Counter: count.text() }, {
  duration: 4000,
  step: function () {
    count.text(Math.ceil(this.Counter)+ "%");
  }
});
    
setTimeout(function(){
    $("#loader").css({"z-index": "0", "display": "none",}); 
    $(".navbar").css({"display": "block"});
}, 3500);







});



