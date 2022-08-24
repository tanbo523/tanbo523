'use strict';

{

  // menu

  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const nav = document.querySelector('nav');
  const mask = document.getElementById('mask');

  open.addEventListener('click', ()=> {
    nav.classList.add('appear');
    open.classList.add('appear');
    close.classList.add('appear');
    mask.classList.add('appear');
  });

  close.addEventListener('click', () => {
    nav.classList.remove('appear');
    open.classList.remove('appear');
    close.classList.remove('appear');
    mask.classList.remove('appear');
  });

  mask.addEventListener('click', () => {
    nav.classList.remove('appear');
    open.classList.remove('appear');
    close.classList.remove('appear');
    mask.classList.remove('appear');
  });


  
  // carousel

  const carouselUl = document.querySelector('.carousel ul');
  const slides = carouselUl.children;
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const dots = [];
  let currentIndex = 0;

  function moveSlides() {
    carouselUl.style.transform = `translateX(${-100 * currentIndex}%)`;
  }

  function setupDots() {
    for(let i = 0; i < slides.length; i++){
      const button = document.createElement('button');
      dots.push(button);
      button.addEventListener('click', () => {
        currentIndex = i;
        dots.forEach(dot => {
          dot.classList.remove('current');
        });
        dots[currentIndex].classList.add('current');
        moveSlides();
      });
      document.querySelector('.btn').appendChild(button);
    }
    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    if(currentIndex > slides.length - 1) {
      currentIndex = 0;
    }
    moveSlides();
    updateDots();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    if(currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    moveSlides();
    updateDots();
  });

// carousel timer

function play() {
  setTimeout(() => {
    currentIndex++;
    if(currentIndex > slides.length - 1) {
      currentIndex = 0;
    }
    moveSlides();
    updateDots();
    play();
  }, 5000)
}

play();

// scrollの監視とイベント追加

// function callback() {
  
// }

// const observer = new IntersectionObserver(callback, {threshold: 0.2,});
// const target = document.getElementById('target');

// observer.obserb(target);


}
