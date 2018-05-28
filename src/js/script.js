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
