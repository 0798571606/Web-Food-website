let menu = document.getElementById('menu-bars');
let navbar = document.querySelector('.navbar');
let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');
let closeIcon = document.querySelector('#close');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  sections.forEach((section) => {
    let top = window.scrollY;
    let height = section.offsetHeight;
    let offset = section.offsetTop - 150;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document
          .querySelector('header .navbar a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};

searchIcon.addEventListener('click', () => {
  searchForm.classList.toggle('active');
  console.log('hamid');
});
closeIcon.addEventListener('click', () => {
  searchForm.classList.remove('active');
});

// var swiper = new Swiper('.home-slider', {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoPlay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   loop: true,
// });

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;
