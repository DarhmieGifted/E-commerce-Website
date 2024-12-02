const bar = document.getElementById('bar');
//const close = document.getElementById('close')
const navbar = document.getElementById('navbar');

//if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.toggle('hidden');
    })
//}

/*if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}*/