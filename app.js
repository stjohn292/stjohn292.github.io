(function() {

    setUpPage();
  
    function setUpPage() {
      addNavEventListeners();
      addArticleEventListeners();
      addWindowEventListeners();
      addModalEventListeners();
      addSliderEventListeners();
    }
    function addSliderEventListeners() {
  
        const sliderPrev = document.getElementById('slider-prev');
        const sliderNext = document.getElementById('slider-next');
        const sliderFrame = document.getElementById('slider-frame');
        const sliderCaption = document.getElementById('slider-caption');
    
        const slides =
          Array.from(sliderFrame.querySelectorAll('div[data-src]'))
            .map(div => {
              return {
                imageUrl: div.getAttribute('data-src'),
                caption: div.textContent.trim(),
              };
            });
    
        let sliderIndex = 0;
        displaySliderImage();
    
        function displaySliderImage() {
          let { imageUrl, caption } = slides[sliderIndex];
          sliderFrame.style.backgroundImage = `url('${imageUrl}')`;
          sliderCaption.innerHTML = caption;
          sliderCaption.classList.add('flash');
          setTimeout(() => {
            sliderCaption.classList.remove('flash');
          }, 0);
        }
    
        function displayPrevSliderImage() {
          sliderIndex--;
          if (sliderIndex < 0) {
            sliderIndex = slides.length - 1;
          }
          displaySliderImage();
        }
    
        function displayNextSliderImage() {
          sliderIndex++;
          if (sliderIndex === slides.length) {
            sliderIndex = 0;
          }
          displaySliderImage();
        }
    
        sliderPrev.addEventListener('click', displayPrevSliderImage);
        sliderNext.addEventListener('click', displayNextSliderImage);
    
        setInterval(function() {
          displayNextSliderImage();
        }, 4000);
      }
    
    })();  

var garage = document.getElementById("garage");

var contact = document.getElementsByClassName("contact");
var contactItems = contact.children;
contact.forEach (function(contactItem) {
    contactItem.addEventListener("mouseover", function(){
        contactItem.style.background = red;
    } );
});
