window.onload = function() {
  window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let parallaxItem = document.querySelector('.p-item3');

    // Adjust the zoom level based on the scroll position
    let scale = 1+ (scrollPosition * 0.01);

    // Apply the zoom transformation to the p-item3 element
    parallaxItem.style.transform = `scale(${scale})`;

    let parallaxItem2 = document.querySelector('.p-item2');

    // Adjust the position of p-item2 based on the scroll position
    parallaxItem2.style.left = `${scrollPosition * -0.5}px`;

  });
};
