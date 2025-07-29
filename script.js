
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header_container');
    header.classList.toggle('scrolled', window.scrollY > 10);
  });

