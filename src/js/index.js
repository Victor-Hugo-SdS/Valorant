const btnMobile = document.getElementById('btn-mobile');
const btnTrailer = document.querySelector('.btn');
const btnCloseModal = document.querySelector('.close-modal');
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
const linkVideo = video.src;

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

function alternarModal() {
    modal.classList.toggle("open");
}

btnMobile.addEventListener('click',toggleMenu);

btnTrailer.addEventListener('click', () => {
    alternarModal();
    video.setAttribute("src", linkVideo);
});

btnCloseModal.addEventListener('click', () => {
    alternarModal();
    video.setAttribute("src", "");
});