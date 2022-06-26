const elementoResposta = document.querySelector("#resposta");
const elementoPesoIdeal = document.querySelector("#retornaPesoIdeal");

function imc() {
  var elementoPeso = document.getElementById("valorPeso");
  var elementoAltura = document.getElementById("valorAltura");

  var peso = elementoPeso.value;
  var altura = elementoAltura.value;

  var calculoImc = peso / (altura * altura);

  if (calculoImc <= 18.5) {
    elementoResposta.innerHTML = `Seu IMC é ${calculoImc.toFixed(
      1
    )} - Baixo Peso.`;
  } else if (calculoImc >= 18.6 && calculoImc <= 24.99) {
    elementoResposta.innerHTML = `Seu IMC é ${calculoImc.toFixed(1)} - Normal.`;
  } else if (calculoImc >= 25 && calculoImc <= 29.99) {
    elementoResposta.innerHTML = `Seu IMC é ${calculoImc.toFixed(
      1
    )} - Sobrepeso.`;
  } else if (calculoImc >= 30) {
    elementoResposta.innerHTML = `Seu IMC é ${calculoImc.toFixed(
      1
    )} - Obesidade.`;
  }

  if (peso === '' || altura === ''){
    elementoPesoIdeal.innerHTML = 'Preencha seu peso e altura corretamente.'
  } else {
    var menorPeso = (peso * 18.6) / calculoImc;
    var maiorPeso = (peso * 24.99) / calculoImc;

    elementoPesoIdeal.innerHTML = `Seu peso ideal está entre ${menorPeso.toFixed(
      1
    )}kg e ${maiorPeso.toFixed(1)}kg.`;
  }
}
