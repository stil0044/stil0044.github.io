// This script file would have the JS that is shared between all pages
// Eg Javascript for Hamburger 
// JS for Loading Animation 


/////////////////////////////////////// HAMBURGER BUTTON//////////////////////////////////////
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



//////VALIDATOR///////
function validateForm() {
    var x = document.forms["username"]["useremail"].value;
    if (x == "") {
        alert("Name and email must be filled out");
        return false;
    }
}





