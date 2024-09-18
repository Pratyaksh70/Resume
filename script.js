// Add event listener to scroll to top button
document.getElementById('scroll-to-top').addEventListener('click', function() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add animation to sections on scroll
window.addEventListener('scroll', function() {
	const sections = document.querySelectorAll('section');
	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;
		const windowHeight = window.innerHeight;
		const windowScrollTop = window.scrollY;
		
		if (windowScrollTop > (sectionTop + sectionHeight - windowHeight)) {
			section.classList.add('scroll-in');
		} else {
			section.classList.remove('scroll-in');
		}
	});
});