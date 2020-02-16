function Slider(slider) {
    if (!(slider instanceof Element)) {
      throw new Error('No slider passed in');
    }
    // create some variables for working with the slider
    let prev;
    let current;
    let next;
    
    // select the elements needed for the slider
    const slides = slider.querySelector('.slides');

  

    function startSlider() {
      current = slider.querySelector('.current') || slides.firstElementChild;
      prev = current.previousElementSibling || slides.lastElementChild;
      next = current.nextElementSibling || slides.firstElementChild;
    }
  
    function applyClasses() {
      current.classList.add('current');
      prev.classList.add('prev');
      next.classList.add('next');
    }
  
    function move(direction) {
      // first strip all the classes off the current slides
      const classesToRemove = ['prev', 'current', 'next'];
      prev.classList.remove(...classesToRemove);
      current.classList.remove(...classesToRemove);
      next.classList.remove(...classesToRemove);
 
      
        [prev, current, next] = [
          current,
          next,
          // get the next slide, or if it's at the end, loop around and grab the first slide
          next.nextElementSibling || slides.firstElementChild,
        ];
      
  
      applyClasses();
    }
  
    // when this slider is created, run the start slider function
    startSlider();
    applyClasses();

    setInterval(move, 2500);
  

  }
  
  const mySlider = Slider(document.querySelector('.slider'));







  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  

// add classes to images half way


  const sliderImages = document.querySelectorAll('.slide-in');
  
  function checkSlide() {
  
    sliderImages.forEach(sliderImage => {
  
      // half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
  
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
  
      if (isHalfShown && isNotScrolledPast) {
  
        sliderImage.classList.add('active');
  
      } else {
  
        sliderImage.classList.remove('active');
  
      }
    });
  }
  
  
  
  window.addEventListener('scroll', debounce(checkSlide));