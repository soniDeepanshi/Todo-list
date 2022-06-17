// description box 
const inputs = document.querySelectorAll('.desc-box input');
const labels = document.querySelectorAll('.desc-box label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="
				transition-delay: ${idx * 50}ms
			">${letter}</span>`)
        .join('');
});


// Footer
const contact_btn = document.querySelector('.contact-btn');
const close_btn = document.querySelector('.close-btn');
const social_container = document.querySelector('.social-container');

contact_btn.addEventListener('click', () => {
    social_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_container.classList.remove('visible')
});