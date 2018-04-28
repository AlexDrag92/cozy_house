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

if(window.innerWidth <= 835){
  hideElements(navigationList, closeMenuBtn);
}else{
  hideElements(showMenuBtn, closeMenuBtn);
}

window.addEventListener('resize', function () {
  if(window.innerWidth <= 835){
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
var animalCardMarginR = animalCards[1].offsetLeft - animalCards[1].offsetWidth;
var cardsWrapperWidth = ((animalCards[1].offsetWidth+animalCardMarginR)*animalCards.length-animalCardMarginR);

if(document.querySelector('.pets-carousel__animal-cards-wrapper')){
  cardsWrapper.style.width = cardsWrapperWidth+'px';
  cardsWrapper.style.left = '0px';
  petsCarousel.style.overflow = 'hidden';

  for (var i = 0; i < arrowCarousel.length; i++){
    arrowCarousel[i].addEventListener('click', function(){
      if(this.classList.contains('arrow-right')){
        if(Math.abs(cardsWrapper.offsetLeft) + petsCarousel.offsetWidth +animalCards[0].offsetWidth+animalCardMarginR <= cardsWrapper.offsetWidth){
          cardsWrapper.style.left = parseInt(cardsWrapper.style.left)-(animalCards[0].offsetWidth+animalCardMarginR)+'px';
        }else{
          cardsWrapper.style.left = '0';
        }
      }else{
        if(cardsWrapper.style.left != '0px'){
          cardsWrapper.style.left = parseInt(cardsWrapper.style.left)+(animalCards[0].offsetWidth+animalCardMarginR)+'px';
        }else{
          cardsWrapper.style.left = -cardsWrapper.offsetWidth+(petsCarousel.offsetWidth)+'px'
        }
      };
    });
  };

};


//Modal and ovelay
var animalLink = document.querySelectorAll('.animal-card a.button');
var animalModal = document.querySelector('.modal-animal');
var closeModalBtn = document.querySelector('.close-modal-button');
var overlay = document.querySelector('.overlay');
var body = document.querySelector('body');




for (var i = 0; i < animalLink.length; i++) {
  animalLink[i].addEventListener('click', function (event) {
    event.preventDefault();

    animalModal.style.display = 'block';
    overlay.style.display = 'block';
    body.style.position = 'relative';

    


    var request;

    if(window.XMLHttpRequest){
      request = new XMLHttpRequest();

    }else{
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open('GET', 'js/animals.json');


    var currentName = this.parentElement.querySelector('.animal-card__animal-name').innerText;

    var forModalName  = document.querySelector('.modal-animal__animal-name');
    var forModalBreed = document.querySelector('.modal-animal__breed');
    var forModalDesc  = document.querySelector('.modal-animal__animal-desc');
    
    var forModalInfo      = document.querySelectorAll('.modal-animal__info-item');
    var forModalCateg     = document.querySelectorAll('.modal-animal__item-category');
    var forModalCategVal  = document.querySelectorAll('.modal-animal__item-category-value');
    
    var forModalImg  = document.querySelector('.modal-animal__image');

    request.onreadystatechange = function () {
      if((request.readyState === 4) && (request.status === 200)){
       var animalsRequest = JSON.parse(request.responseText);


       for (var i = 0; i < animalsRequest.length; i++) {
         if(animalsRequest[i].name == currentName){
          forModalName.innerText  = animalsRequest[i].name;
          forModalBreed.innerText = animalsRequest[i].breed;
          forModalDesc.innerText  = animalsRequest[i].desc;
          forModalImg.src = animalsRequest[i].imgsrc;


          for (var j = 0; j < animalsRequest[i].infolist.length; j++) {
            for (option in animalsRequest[i].infolist[j]) {
              forModalCateg[j].innerText = option;
              forModalCategVal[j].innerText = animalsRequest[i].infolist[j][option];
            }
          };
        }else{

        }
      };
    };
  };


  request.send();
});
};


closeModalBtn.addEventListener('click', function () {
  animalModal.style.display = 'none';
  overlay.style.display = 'none';
  body.style.position = 'static';
});