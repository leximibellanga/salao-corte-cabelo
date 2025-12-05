/* =============== MENU -> BOTAO BURGER ================*/
let menuBurger = document.getElementById('butao-menu-burger')
let navbar = document.getElementById('navbar')
let header = document.getElementById('header')
let botaoFecharMenu = document.getElementById('botao-fechar-menu')
let navbarLink = document.getElementsByClassName('navbar-link')
// abrir menu quando clicar no MenuBurger
menuBurger.addEventListener('click', () => {
    navbar.style.right = '0'
    header.style.overflow = 'visible'
})
// Funcao para fechar menu 
function fecharMenu() {
    navbar.style.right = '-1000px'
    header.style.overflow = 'hidden'
}
// fechar menu quando clicar no 'X'
botaoFecharMenu.addEventListener('click', fecharMenu)
// Fechar menu ao clicar nos Links navbar
for (let i = 0; i < navbarLink.length; i++) {
    navbarLink[i].addEventListener('click', fecharMenu)
}


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


/* =============== AGENDAR ================*/
let nome = document.getElementById('inome')
let email = document.getElementById('iemail')
let telefone = document.getElementById('itelefone')
let data = document.getElementById('idata')
let hora = document.getElementById('ihora')
let servico = document.getElementById('iservico')
let btnAgendar = document.getElementById('btn-agendar')
let msgConfirmacao = document.getElementById('msg-confirmacao')
let msgFechar = document.getElementById('msg-fechar')

btnAgendar.addEventListener('click', () => {
    if (nome.value == '' || email.value == '' || telefone.value == '' || data.value == '' || hora.value == '' || servico.value == '') {
        alert('Por favor preencha o formulario!')
    } else {
        let msgNome = document.getElementById('msg-nome')
        let msgTelefone = document.getElementById('msg-telefone')
        let msgData = document.getElementById('msg-data')
        let msgHora = document.getElementById('msg-hora')
        let msgServico = document.getElementById('msg-servico')
        let valor = document.getElementById('msg-valor')
        let opcoes = document.getElementsByClassName('opcao')
        // vectores
        let valores = [nome.value, telefone.value, data.value, hora.value, servico.value]
        let variaveis = [msgNome, msgTelefone, msgData, msgHora, msgServico]
        let dinheiro = [60, 100, 120, 140, 180, 100, 180, 200, 50, 40, 30, 350]

        for(let i = 0; i < opcoes.length; i++) {
            if (servico.value == opcoes[i].value) {
                valor.textContent = `${dinheiro[i]}.00MZN`
            }
        }
        for(let i = 0; i < variaveis.length; i++) {
            variaveis[i].textContent = valores[i]
        }

        agendar.style.display = 'none'
        msgConfirmacao.style.display = 'block'
        nome.value = email.value = telefone.value = data.value = hora.value = servico.value = ''
    }
})

/* fechar msg de confirmacao */
msgFechar.addEventListener('click', () => {
    msgConfirmacao.style.display = 'none'
})



// SCROOL
window.addEventListener('scroll', () => {
    const headerParte02 = document.querySelector('header .parte02')
    if (this.scrollY >= 130) {
        headerParte02.classList.add('menu-fixo')
    } else {
        headerParte02.classList.remove('menu-fixo')
    }
})




