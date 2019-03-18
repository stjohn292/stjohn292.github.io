(function() {
  
  
    // function setUpPage() {
    //   addNavEventListeners();
    //   addArticleEventListeners();
    //   addWindowEventListeners();
    //   addModalEventListeners();
    //   addSliderEventListeners();
    // }
    
let slideIndex = 1;
showprojects(slideIndex);

function cycleprojectsLeft(){
   showprojects(slideIndex -= 1)
}

function cycleprojectsRight(){
   showprojects(slideIndex += 1)
}

function showprojects(n) {
   let i;
   const projectsCard = document.getElementsByClassName("projects-card");
   console.log(projectsCard);
   if (n > projectsCard.length) {
       slideIndex = 1;
   }
   if (n < 1){
       slideIndex = projectsCard.length;
   }
   for (i = 0; i < projectsCard.length; i++){
       projectsCard[i].style.display = "none";
   }
   
   projectsCard[slideIndex - 1].style.display = "flex";
}

document.getElementById("buttonLeft").addEventListener("click", cycleprojectsLeft);
document.getElementById("buttonRight").addEventListener("click", cycleprojectsRight);
/*    
var garage = document.getElementById("garage");

var contact = document.getElementsByClassName("contact");
var contactItems = contact.children;
contact.forEach (function(contactItem) {
    contactItem.addEventListener("mouseover", function(){
        contactItem.style.background = red;*/
} )();
