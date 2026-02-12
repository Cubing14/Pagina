let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function moveSlide(direction) {
    currentIndex += direction;
    
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

let autoSlide = setInterval(() => {
    moveSlide(1);
}, 5000);

function changeView(view) {
    const container = document.querySelector('.carousel-container');
    const buttons = document.querySelectorAll('.view-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    container.className = 'carousel-container';
    
    if (view === 'grid') {
        container.classList.add('grid-view');
        clearInterval(autoSlide);
    } else if (view === 'list') {
        container.classList.add('list-view');
        clearInterval(autoSlide);
    } else {
        showSlide(currentIndex);
        autoSlide = setInterval(() => {
            moveSlide(1);
        }, 5000);
    }
}
