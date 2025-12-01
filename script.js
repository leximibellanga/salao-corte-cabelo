/* =============== MENU -> BOTAO BURGER ================*/
let menuBurger = document.getElementById('butao-menu-burger')
let navbar = document.getElementById('navbar')
let header = document.getElementById('header')
let botaoFecharMenu = document.getElementById('botao-fechar-menu')

menuBurger.addEventListener('click', () => {
    navbar.style.right = '20px'
    header.style.overflow = 'visible'
})

botaoFecharMenu.addEventListener('click', () => {
    navbar.style.right = '-1000px'
    header.style.overflow = 'hidden'
})



