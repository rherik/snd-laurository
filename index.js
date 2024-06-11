function fuja(){
    var btnNao = document.getElementById("nao");
    var container = document.getElementById("container");

    var larguraJanela = container.clientWidth;
    var alturaJanela = container.clientHeight;

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
