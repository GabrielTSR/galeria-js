"use strict"

const imagens = [
    './img/castelo.png',
    './img/cidade_caos.jpg',
    './img/floresta.jpg',
    './img/ilha_voadora.jpg',
    './img/labirinto.jpg',
    './img/navio_na_montanha.jpg',
    './img/piramide_serpente.jpg',
    './img/universo.png',
]

const criarItem = (urlImagem) => {
    const container = document.querySelector('.galeria-container')

    //FORMA BASTANTE ENCONTRADA NA WEB, MAS SACRIFICA A VELOCIDADE DO SITE, UMA VEZ QUE O INNER RECRIARÁ A TAG DIVERSAS VEZES

    // container.innerHTML += `
    // <a href="${urlImagem}" class="galeria-item">
    //     <img src="${urlImagem}" alt="castelo">
    // </a>
    // `

    const novoLink = document.createElement("a")
    novoLink.href = urlImagem
    novoLink.classList.add("galeria-item")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`

    //antes, a variavel "novoLink" estava na memória, com o appendChild ele se incluirá oficialmente no container
    container.appendChild(novoLink)

}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()