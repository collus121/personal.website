document.querySelectorAll('a.yakor').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);

    if (scrollTarget) {
      scrollTarget.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
