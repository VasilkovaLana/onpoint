//Touch Evenе
var yDown = null;
var countIteration = 0;
var flag = false;

document.body.addEventListener('touchstart', TouchStart, false);
document.body.addEventListener('touchmove', TouchMove, false);
document.body.addEventListener('touchend', TouchStop, false);

function TouchStop() {
  
  if (flag === true) {
    countIteration++;
    if (countIteration > 2) {
      countIteration = 2;
      return;
    }
  } else {
    countIteration--;
    if (countIteration < 0) {
      countIteration = 0;
      return;
    }
  }
  currentSlide(countIteration);
}

function TouchStart(e) {
  yDown = e.touches[0].clientY;
}

function TouchMove(e) {
  if (!yDown || e.target.classList.contains('progress-bar')) {
    return;
  }
  var yUp = e.touches[0].clientY;
  var yDiff = yDown - yUp;

  if (yDiff > 0) {
    flag = true;
  }
  else {
    flag = false;
  }
  xDown = null;
};


//слайдер "ползунок"
var slideShow = document.querySelector('.slide__third-item');
var stepWidth = parseInt(getComputedStyle(slideShow).width);
var progressBar = document.querySelector('.progress-bar');

function sliderChange(val) {
  if (val <= 25) {
    slideShow.style.marginLeft = '';
  }
  if (val > 25 && val < 75) {
    slideShow.style.marginLeft = -stepWidth * 1 + 'px';
  }
  if (val >= 75) {
    slideShow.style.marginLeft = -stepWidth * 2 + 'px';
  }
  progressBar.style.background = '-webkit-linear-gradient(left ,#d1eaff 0%,#d1eaff ' + val + '%,#435063 ' + val + '%, #435063 100%)';
}

//слайдер
var slidersConteiner = document.querySelector('.slideshow');
var sliders = document.querySelector('.slide__item');
var stepHeight = parseInt(getComputedStyle(sliders).height);
var link = document.querySelectorAll('.links__item'); 

function currentSlide(n) {
  slidersConteiner.style.marginTop = -stepHeight * n + 'px';

  for (var i = 0; i < link.length; i++) {
    if (link[i].classList.contains("active")) {
      link[i].classList.remove('active');
    }
  }
  link[n].classList.add('active');
}
