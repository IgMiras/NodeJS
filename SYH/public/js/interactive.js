var botao = document.querySelector(".fale")
var label = document.querySelector(".fale label")
var h1 = document.querySelector(".frase1")
var h3 = document.querySelector(".frase2")
var box = document.querySelector(".box")
var notBox = document.querySelectorAll('body :not(.box *)');


botao.addEventListener("click", tela_cadastro)
label.addEventListener("click", tela_cadastro)

function tela_cadastro(e) {
  h1.style.display = "none"
  h3.style.display = "none"
  botao.style.display = "none"
  box.style.display = "flex"
  notBox.forEach(element => {
    element.style.opacity = '0.5';
  });
  box.style.opacity = "1"
}

let fechar = document.querySelector(".fa-circle-xmark")

fechar.addEventListener("click", close)

function close(e) {
  box.style.display = "none"
  notBox.forEach(element => {
    element.style.opacity = '1';
  });
  h1.style.display = "block"
  h3.style.display = "block"
  botao.style.display = "block"
}
 let botaoform = document.querySelector(".botaoform")
 
 