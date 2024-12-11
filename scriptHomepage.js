document.addEventListener('DOMContentLoaded', function () {

    const h2 = document.querySelector('h2');
    h2.addEventListener('mouseover', function () {
        h2.style.color = 'brown';
    });

    const p = document.querySelector('p');
    p.addEventListener('mouseover', function () {
        p.style.color = 'brown';
    });

    p.addEventListener('mouseout', function () {
        p.style.color = 'black';
    });

    const h3 = document.querySelector('h3');
    h3.addEventListener('mouseover', function () {
        h3.style.color = 'brown';
    });

    const h4 = document.querySelector('h4');
    h4.addEventListener('mouseover', function () {
        h4.style.color = 'brown';
    });

    document.addEventListener('DOMContentLoaded', function () {
        document.addEventListener('keydown', function (event) {
            const carousel1 = document.getElementById('carouselExampleIndicators1');
            const carousel2 = document.getElementById('carouselExampleIndicators2');

            if (event.key === 'ArrowLeft') {
                // Стрелка влево на карусели
                carousel1.dispatchEvent(new Event('prev.bs.carousel'));
                carousel2.dispatchEvent(new Event('prev.bs.carousel'));
            } else if (event.key === 'ArrowRight') {
                // Стрелка вправо на карусели
                carousel1.dispatchEvent(new Event('next.bs.carousel'));
                carousel2.dispatchEvent(new Event('next.bs.carousel'));
            }
        });
    });

    // Ты нажал энтер
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            window.location.href = 'index.html';
        }
    });
});

document.querySelector('.btn-animated').addEventListener('click', function () {
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(() => { toast.style.display = 'none'; }, 8000);
});



const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'flex'; // Показываем кнопку
    } else {
        scrollToTopBtn.style.display = 'none'; // Скрываем кнопку
    }
});


scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
});