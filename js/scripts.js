/* scripts.js — Connor Munz Landing Page */

/* Smooth scroll with offset for sticky nav height */
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var targetId = this.getAttribute('href');
    var target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    var navHeight = document.getElementById('main-nav').offsetHeight;
    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    /* Close mobile nav menu if open */
    var navCollapse = document.getElementById('navMenu');
    if (navCollapse && navCollapse.classList.contains('show')) {
      var toggler = document.querySelector('.navbar-toggler');
      if (toggler) toggler.click();
    }
  });
});
