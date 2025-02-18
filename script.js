function toggleMenu() {
    document.querySelector('.menu').classList.toggle('show');
}

// Rating system
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', function () {
        const value = parseInt(this.getAttribute('data-value'));
        const parent = this.parentNode;
        const allStars = parent.querySelectorAll('.star');
        allStars.forEach(s => s.classList.remove('active'));
        for (let i = 0; i < value; i++) {
            allStars[i].classList.add('active');
        }
    });
});
