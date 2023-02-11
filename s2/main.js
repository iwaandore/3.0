const frases = document.querySelectorAll("#frases li");
const botao = document.querySelector("#gerarFrase");

botao.addEventListener("click", function () {
    const numeroAleatorio = Math.floor(Math.random() * frases.length);
    document.getElementById("fraseEscolhida").innerHTML = frases[numeroAleatorio].innerHTML;
});