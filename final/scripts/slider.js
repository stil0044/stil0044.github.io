// The js for slider goes in this file

//SLIDESHOW-////////////////////////////////https://codepen.io/JHicks/pen/szrKm

/*SLIDER FINAL*/
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

