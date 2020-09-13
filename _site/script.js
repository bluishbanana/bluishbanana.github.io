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

function* offsetParents(offsetParent) {
  while (offsetParent !== document.body) {
    yield offsetParent
    offsetParent = offsetParent.offsetParent
  }
}

const distanceToBodyTop = (offsetParent) => ([...offsetParents(offsetParent)].reduce((a, v) => a + v.offsetTop, 0))

const sliderImages = document.querySelectorAll('.slide_in');

function checkSlide() {

  sliderImages.forEach(sliderImage => {

    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = distanceToBodyTop(sliderImage) + sliderImage.height;
    const isHalfShown = slideInAt > distanceToBodyTop(sliderImage);
    const isNotScrolledPast = window.scrollY < imageBottom;


    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
} 

window.addEventListener('scroll', debounce(checkSlide));