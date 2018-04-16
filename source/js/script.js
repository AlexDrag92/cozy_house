//MENU
var closeMenuBtn = document.querySelector('.navigation .navigation__button-close');
var showMenuBtn = document.querySelector('.navigation .navigation__button-menu');
var navigationList = document.querySelector('.navigation .navigation__list');

var hideElements = function () {
  for (var i = 0; i < arguments.length; i++) {
    arguments[i].style.display = 'none';
  };
};

var showElements = function () {
  for (var i = 0; i < arguments.length; i++) {
    arguments[i].style.display = 'block';
  };
};

if(window.innerWidth <= 768){
  hideElements(navigationList, closeMenuBtn);
}else{
  hideElements(showMenuBtn, closeMenuBtn);
}

window.addEventListener('resize', function () {
  if(window.innerWidth <= 768){
    //hideElements(navigationList, closeMenuBtn);
    showElements(showMenuBtn);
  }else{
    showElements(navigationList);
    hideElements(showMenuBtn, closeMenuBtn);
  };
});

showMenuBtn.addEventListener('click', function () {
  showElements(closeMenuBtn, navigationList);
  hideElements(this);
});

closeMenuBtn.addEventListener('click', function () {
  showElements(showMenuBtn);
  hideElements(this, navigationList);
});

//Slider
var arrowCarousel =  document.querySelectorAll('.arrow');
var cardsWrapper = document.querySelector('.pets-carousel__animal-cards');
var petsCarousel = document.querySelector('.pets-carousel__animal-cards-wrapper');
var animalCards = document.querySelectorAll('.animal-card');
var animalCardMarginR = 55;

cardsWrapper.style.left = '0px';
petsCarousel.style.overflow = 'hidden';
//console.log(petsCarousel.offsetWidth);

for (var i = 0; i < arrowCarousel.length; i++){
  arrowCarousel[i].addEventListener('click', function(){
    if(this.classList.contains('arrow-left')){
      if(Math.abs(cardsWrapper.offsetLeft) + petsCarousel.offsetWidth +animalCards[0].offsetWidth+animalCardMarginR < cardsWrapper.offsetWidth){
        cardsWrapper.style.left = parseInt(cardsWrapper.style.left)-(animalCards[0].offsetWidth+animalCardMarginR)+'px';
      }
    }else{
      if(cardsWrapper.style.left != '0px'){
        cardsWrapper.style.left = parseInt(cardsWrapper.style.left)+(animalCards[0].offsetWidth+animalCardMarginR)+'px';
      }
    };
  });
};

/*
960
2545
1300
270
55









1625
*/