// Init Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems);
});

// Init Scrollspy
document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.scrollspy');
  const instances = M.ScrollSpy.init(elems);
});

// Init Carousel
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    indicators: true
  });
});
