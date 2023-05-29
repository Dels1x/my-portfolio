window.addEventListener('DOMContentLoaded', function() {
	var everything = document.getElementById('everything');
	var introElement = document.getElementById('intro');
	everything.style.opacity = '0'
	introElement.style.opacity = '1'
	setTimeout(function() {
		everything.style.opacity = '1';
		introElement.style.opacity = '0'
		setTimeout(function() {
			introElement.remove();
		}, 1000);
	}, 1000);

});

function scrollToSection(sectionId) {
	const section = document.getElementById(sectionId);

	const rect = section.getBoundingClientRect();
	const yCoordinate = rect.top + window.pageYOffset;
  
	window.scrollTo({
  		top: yCoordinate - 75, // -75 for accounting nav height
  		behavior: 'smooth' // You can use 'auto' or 'instant' for different scrolling behavior
	});
}
