//Typed js library

var typed = new Typed(".autoType", {
    strings: ['UI/UX Designer', 'Web Developer'],
    typeSpeed: 100, loop: true, 
  });

//   // Disable scrolling by setting overflow to "hidden"
// document.body.style.overflow = 'hidden';
// document.documentElement.style.overflow = 'hidden';

// // Re-enable scrolling after 4 seconds
// setTimeout(function() {
//   document.body.style.overflow = 'unset';  // or 'scroll' to allow scrolling
//   document.documentElement.style.overflow = 'unset';  // or 'scroll' to allow scrolling
// }, 4000); // 4 seconds in milliseconds (4,000 milliseconds)

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

const menu=document.querySelector('.Mobile-links-side');
function showsidebar(){
  menu.style.transform='translateX(0px)';
}
function hidesidebar(){
  menu.style.transform='translateX(250px)';
}


// reset form when clicking input button

let reset=document.getElementById('resetBtn')
let input=document.getElementsByTagName('input')
reset.addEventListener('click',()=>{
  input.forEach(input => input.value='')
    
  });

  //js for precisely smooth scroll for project section

  const navLinks = document.querySelectorAll('nav .links-side a'); // Select all anchor tags within the navigation bar

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor link behavior
    const targetSection = document.getElementById(this.hash.substring(1)); // Get section element based on link's hash
    const viewportTop = window.scrollY || document.documentElement.scrollTop; // Get current scroll position
    const sectionTop = targetSection.offsetTop; // Get target section's top position
    const offset = sectionTop - viewportTop; // Calculate offset

    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "end" // Ensures section starts at the top of the viewport
    });
  });
});
