//Typed js library

var typed = new Typed(".autoType", {
    strings: ['UI/UX Designer', 'Android Developer', 'Web Developer'],
    typeSpeed: 80, startDelay: 6000
  });

  // Disable scrolling by setting overflow to "hidden"
document.body.style.overflow = 'hidden';
document.documentElement.style.overflow = 'hidden';

// Re-enable scrolling after 4 seconds
setTimeout(function() {
  document.body.style.overflow = 'auto';  // or 'scroll' to allow scrolling
  document.documentElement.style.overflow = 'auto';  // or 'scroll' to allow scrolling
}, 4000); // 4 seconds in milliseconds (4,000 milliseconds)

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },


});