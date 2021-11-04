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


$("#bt-quemsomos").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#quem-somos").offset().top
    }, 1400);
});

$("#bt-contato").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contato-duvida").offset().top
    }, 1400);
});

function Enviar(){
    $("#email").val("")
    $("#mensagem").val("")
    $("#nome").val("")
    $("#email1").val("")
    $("#telefone").val("")
    $("#instagram").val("")
    $("#mensagem1").val("")
    alert("Mensagem enviada com sucesso")
}
