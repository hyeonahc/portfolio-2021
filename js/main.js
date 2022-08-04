// variable declaration
const menus = document.querySelectorAll('.aside__menu a');
const sections = document.querySelectorAll('section');
let secOffsetTop;
let oneWheel;

// window starts from position(0, 0) wherever it's loaded
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// when each menu is clicked
// 1. execute 'on' function
// 2. scroll to section
menus.forEach((menu, index) => {
  menu.addEventListener('click', function (e) {
    e.preventDefault;
    on(menu);
    secOffsetTop = sections[index].offsetTop;
    window.scrollTo({
      top: secOffsetTop,
      behavior: 'smooth',
    });
  });
});

// class 'on' will be removed from the menu
function clearOn() {
  menus.forEach(menu => {
    menu.classList.remove('on');
  });
}

// class 'on' will be added to the menu
function on(menu) {
  // console.log(menu);
  clearOn();
  menu.classList.add('on');
}

// When user scrolls to the section, the menu will have 'on' class accordingly
window.addEventListener('scroll', function () {
  clearTimeout(oneWheel);
  oneWheel = setTimeout(function () {
    const scrolled = window.scrollY;
    const innerHeight = window.innerHeight;
    // console.log(scrolled, innerHeight);
    if (scrolled === 0) {
      on(menus[0]);
    }
    if (scrolled > innerHeight / 2) {
      on(menus[1]);
    }
    if (scrolled > innerHeight + innerHeight / 2) {
      on(menus[2]);
    }
    if (scrolled > innerHeight * 7 + innerHeight / 2) {
      on(menus[3]);
    }
    if (scrolled > innerHeight * 8 + innerHeight / 2) {
      on(menus[4]);
    }
  }, 80);
});

// Create toggle button when max width is 992px
const toggleBtn = document.querySelector('.aside__toggle--btn');
const menu = document.querySelector('.aside__menu');

toggleBtn.addEventListener('click', function () {
  menu.classList.toggle('open');
  toggleBtn.classList.toggle('open');
});

// Swiper Library
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});