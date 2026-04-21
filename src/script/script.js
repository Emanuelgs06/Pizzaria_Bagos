// MENU BURGUER
const headerContainer = document.querySelector(".header__container")
const toggle = document.querySelector(".header__toggle")
const nav = document.querySelector(".nav")
    
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("ativa")
        nav.classList.toggle("ativa")
        headerContainer.classList.toggle("ativa")
    
    })

// NAV OCULT 
const navLinks = document.querySelectorAll(".nav__link");

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove("ativa");
            toggle.classList.remove("ativa")
            headerContainer.classList.remove("ativa");

        })
    });

















// function perimetro(quadrado) { 
//     const perimetro = quadrado * 4;
//     return perimetro;
// }

// perimetro(4)

// function nomeCompleto(nome, sobrenome) {
//     return nome + sobrenome;
// }
// nomeCompleto('Emanuel', 'Guerra')

// function avaliaNumero(numero) {
// if (numero % 2 === 0 ){
//     console.log("PAR");
// }
// else if (numero % 2 !== 0) {
//     console.log("IMPAR");
// }
// }

// addEventListener('scroll', function() {
//     console.log("EMANUEL GUERRA")
// })

// function media(n1, n2, n3) {
//     const totalMedia = (n1 + n2 + n3) / 3;
//     if (totalMedia >= 7) {
//         return "aprovado";
//     }
//     else if (totalMedia <7) {
//         return "reprovado"
//     }
// }
// console.log(media(10, 5, 5));

var pessoa = {
    nome: "Emanuel",
    idade: 28,
    profissão: 'Designer Iniciante'
}