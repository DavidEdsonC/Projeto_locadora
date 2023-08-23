const abrirMenu = document.querySelector('#abrir');
const fecharMenu = document.querySelector('#fechar');

abrirMenu.addEventListener('click', () => {
    let menu = document.querySelector('#menuMobile');
    abrirMenu.style.display = 'none';
    menu.style.display = 'block';
    fecharMenu.style.display = 'block';
});

fecharMenu.addEventListener('click', () => {
    let menu = document.querySelector('#menuMobile');
    fecharMenu.style.display = 'none';
    menu.style.display = 'none';
    abrirMenu.style.display = 'block';
});

