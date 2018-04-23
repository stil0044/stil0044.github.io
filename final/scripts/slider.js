// The js for slider goes in this file



////////////////////////////////////////////////////////////////////////////////////


///AUTOMATIC SLIDESHOW//////NOT WORKING??????? IS IT LINKED??




//SLIDESHOW---------https://www.w3schools.com/howto/howto_js_slideshow.asp///


$(document).ready(function(){
  //call the function when ready
  slideShow();


//Actually define the slideShow()
function slideShow(){
  
  //*** Conditional & Variables ***//
  
    //Define the current img
    var current = $('#slider .show');
    //If index != 0/false then show next img
  var next = current.next().length ? 
      current.next() :
      // if index == false then show first img
      current.siblings().first();
  
   //*** Swap out the imgs and class ***//
   current.hide().removeClass('show');
   next.fadeIn("slow").addClass('show');
  
  
  //*** Repeat function every 3 seconds ***//
  setTimeout(slideShow, 3000);
  
};
  
}); //end ready






/////FADESLIDE SHOW///////
$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});