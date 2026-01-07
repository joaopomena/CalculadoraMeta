function calcular() {
  const input = document.getElementById("valor");
  const valor = Number(input.value);

  const taxa = 1.125; // 12,5%
  const valorFinal = valor * taxa;
  const acrescimo = valorFinal - valor;

  if (valor <= 0 || isNaN(valor)) {
    document.getElementById("valorBase").innerText = `Valor base: R$ 0,00`;
    document.getElementById("valorJuros").innerText = `Juros/Impostos (12,5%): R$ 0,00`;
    document.getElementById("valorFinal").innerText = `Valor total: R$ 0,00`;
    return;
  }

  document.getElementById("valorBase").innerText =
    `Valor base: R$ ${valor.toFixed(2).replace(".", ",")}`;

  document.getElementById("valorJuros").innerText =
    `Juros/Impostos (12,5%): R$ ${acrescimo.toFixed(2).replace(".", ",")}`;

  document.getElementById("valorFinal").innerText =
    `Valor total: R$ ${valorFinal.toFixed(2).replace(".", ",")}`;
}

function copiarValor() {
  const texto = document.getElementById("valorFinal").innerText;
  navigator.clipboard.writeText(texto);
  alert("Valor total copiado para a área de transferência!");
}
