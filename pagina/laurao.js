function fuja(){
    var btnNao = document.getElementById("nao");
    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;
    var maxX = larguraJanela - btnNao.offsetWidth;
    var maxY = alturaJanela - btnNao.offsetHeight;
    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    btnNao.style.left = aleatorioX + "px";
    btnNao.style.top = aleatorioY + "px";
}
 function aceita(){
    return alert("Tu já namora, otária!");
 }
