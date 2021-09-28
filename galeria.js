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

function definirImagemAnterior(indice, imagensArray) {

    return indice > 0 ? imagensArray[indice - 1] : imagensArray[imagensArray.lenght - 1]
}

function definirImagemSeguinte(indice, imagensArray) {

    return imagensArray.lenght - 1 > indice ? imagensArray[indice + 1] : imagensArray[0]
}

// const limparId = (urlImagem) => urlImagem.split("/")[2].split('.')[0].replace(" ", "-")

const criarSlider = (urlImagem, indice, imagensArray) => {

    const slideContainer = document.querySelector('.slide-container')
    const slide = document.createElement("div")
    slide.classList.add("slide")
    slide.id = urlImagem
    slide.innerHTML = ` 
    <div class="imagem-container">
    <a href="" class="fechar">&#128473;</a>
    <a href="#${definirImagemAnterior(indice, imagensArray)}" class="navegacao anterior">&#171;</a>
    <img src="${urlImagem}" alt="">
    <a href="#${definirImagemSeguinte(indice, imagensArray)}" class="navegacao proximo">&#187;</a>
    </div>`

    slideContainer.appendChild(slide)
}

const criarItem = (urlImagem, indice, imagensArray) => {
    const container = document.querySelector('.galeria-container')

    //FORMA BASTANTE ENCONTRADA NA WEB, MAS SACRIFICA A VELOCIDADE DO SITE, UMA VEZ QUE O INNER RECRIARÁ A TAG DIVERSAS VEZES.

    // container.innerHTML += `
    // <a href="${urlImagem}" class="galeria-item">
    //     <img src="${urlImagem}" alt="castelo">
    // </a>
    // `

    const novoLink = document.createElement("a")
    novoLink.href = "#" + urlImagem
    novoLink.classList.add("galeria-item")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`

    //antes, a variavel "novoLink" estava na memória, com o appendChild ele se incluirá oficialmente no container
    container.appendChild(novoLink)

    criarSlider(urlImagem, indice, imagensArray)

}

const carregarImagens = () => imagens.forEach(criarItem)

carregarImagens()