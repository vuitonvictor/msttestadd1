
document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('header');
	window.addEventListener('scroll', () =>
		window.scrollY > 0 ? header.classList.add('down') : header.classList.remove('down'),
		{ passive: true }
	);
});
  document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    if (burger && nav) {
      burger.addEventListener('click', function() {
        this.classList.toggle('change');
        if (this.classList.contains('change')) {
          nav.classList.add('active');
        } else {
          nav.classList.remove('active');
        }
      });
    }
  });