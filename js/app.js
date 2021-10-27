$("#slider").nivoSlider({
    controlNav: false,
});

let artes = ['imagens/abaporu.jpg', 'imagens/monalisa.jpg', 'imagens/obeijo.jpg']

function CarregarArtes(){
    let totalArtes = artes.length
    let divListaArtes = document.querySelector(".lista-artes")

    divListaArtes.innerHTML = ""
    for (let i = 0; i <totalArtes; i++){
    divListaArtes.innerHTML += "<img src=" + artes[i] +">"
}
}
