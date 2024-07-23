//  scroll animation Effect
AOS.init({
    once: true
});

// nav handler
const menu_btn = document.querySelector('nav .menu-button');
const links = document.querySelector('nav .menu');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active')
    links.classList.toggle('active')
})

// autoplay video 
document.addEventListener('DOMContentLoaded', function () {
    let video = document.querySelector('.videoAutoPlay');
    video.addEventListener('canplaythrough', function () {
        video.play();
    }, true);
});