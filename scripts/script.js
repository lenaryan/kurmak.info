document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 640) {
        document.getElementById('nav__mob-btn').addEventListener('click', () => {
            document.getElementById('nav__mob-menu').classList.add('show');
            document.getElementById('nav__mob-menu').classList.remove('hide');
            document.getElementById('nav__mob-btn').setAttribute('aria-expanded', 'true');
        });
        document.getElementById('nav__close').addEventListener('click', () => {
            document.getElementById('nav__mob-menu').classList.add('hide');
            setTimeout(() => {
                document.getElementById('nav__mob-menu').classList.remove('show');
            }, 800)
            document.getElementById('nav__mob-btn').setAttribute('aria-expanded', 'false');
        });
    }
})

function setSlider(selector) {
    const slider = document.querySelector(selector);
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', e => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', _ => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', _ => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const SCROLL_SPEED = 1;
        const walk = (x - startX) * SCROLL_SPEED;
        slider.scrollLeft = scrollLeft - walk;
    });
}

document.addEventListener('DOMContentLoaded', () => {            
    setSlider('.reviews__wrap');
    setSlider('.team__wrap');
})

$(() => {new WOW().init();})