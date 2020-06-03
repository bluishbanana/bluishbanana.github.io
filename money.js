const toggleNav = document.querySelector('.toggle-nav')
const navMenu = document.querySelector('.mobile-nav')
const carot = document.querySelector('.carot')
const subMenu = document.querySelector('.mobile-dropdown-nav')

toggleNav.addEventListener("click", startMenu);
carot.addEventListener("click", startSubMenu);

function startMenu() {
  navMenu.classList.toggle('open')
}
function startSubMenu() {
  subMenu.classList.toggle('open')
  this.classList.toggle('open')
}

// hamburger button animation
// when click, give hamburger open
const button = document.getElementById("hamburger-1");
button.addEventListener("click", function(){
    this.classList.toggle("open")
  });


// selecting the three li, the white background, and the nav itself
const triggers = document.querySelectorAll('.mobile-nav-main > li')
console.log(triggers)





// function when mouse enters
function handleEnter() {
  
  // when mouse enters, add the class 'trigger-enter'
  this.classList.add('trigger-enter');
    
  // when the thing that got hovered contains "trigger-enter", add "trigger-enter-active" but after 150s
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  
  

   
  }








//function when mouse leaves, remove all active classes
function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
}




//what function to use for enters and leaves
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

