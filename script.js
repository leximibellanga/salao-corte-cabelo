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




/* =============== BOTAO DE 'VER MAIS' IMAGENS DO PORTFOLIO ================*/
let verMais = document.getElementById('ver-mais')
let portfolioImg = document.getElementsByClassName('portfolio-img')

verMais.addEventListener('click', () => {
    if (verMais.textContent == 'ver mais') {
        for(let i = 6; i < portfolioImg.length; i++) {
            portfolioImg[i].style.display = 'block'
        }
        verMais.textContent = 'ver menos'
    } else {
        for(let i = 6; i < portfolioImg.length; i++) {
            portfolioImg[i].style.display = 'none'
        }
        verMais.textContent = 'ver mais'
    }
})

/* =============== BOTAO PARA ABRIR FORMULARIO DE AGENDAMENTO ================*/
let botaoAgendar = document.getElementsByClassName('botao-agendar')
let agendar = document.getElementById('agendar') 
let body = document.body

for (let i = 0; i < botaoAgendar.length; i++) {
    botaoAgendar[i].addEventListener('click', () => {
        agendar.style.display = 'block'
    })
}


