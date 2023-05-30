window.addEventListener('DOMContentLoaded', function() {
	const everything = document.getElementById('everything');
	const introElement = document.getElementById('intro');
	everything.style.opacity = '0'
	introElement.style.opacity = '1'
	setTimeout(function() {
		everything.style.opacity = '1';
		introElement.style.opacity = '0'
		setTimeout(function() {
			introElement.remove();
		}, 1200);
	}, 1200);
});

function scrollToSection(sectionId) {
	const section = document.getElementById(sectionId);

	const rect = section.getBoundingClientRect();
	const yCoordinate = rect.top + window.pageYOffset;
  
	window.scrollTo({
  		top: yCoordinate - 90, // -90 for accounting nav height
  		behavior: 'smooth' // You can use 'auto' or 'instant' for different scrolling behavior
	});
}

function copyText(text) {
	navigator.clipboard.writeText(text)
		.then(() => {
			console.log('Text copied to clipboard:',text);
			// Perform any additional actions upon successful copy
		})
		.catch((err) => {
			console.error('Error copying text:', err);
			// Handle any errors that occur during the copy process
		});
}

function toggleTheme() {
	const elementsToStyle = document.querySelectorAll("main, footer, nav");

	elementsToStyle.forEach((element) => {
			element.classList.toggle("dark-theme");
	});
}